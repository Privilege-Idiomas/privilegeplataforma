-- F2.A — Identidade, papéis, vínculos e auditoria mínima (Issue #7, docs/42).
--
-- Escopo: entidades de IDENTIDADE separadas de direitos comerciais, matrícula e
-- progresso (que não existem aqui). Sem fluxo de cadastro/login (F2.B).
-- Migração ADITIVA e não destrutiva; FKs com ON DELETE RESTRICT.
--
-- Princípios:
-- * Nega por padrão: RLS em todas as tabelas + privilégios mínimos explícitos
--   (os grants amplos padrão do Supabase são revogados nestas tabelas).
-- * Ninguém se autopromove: não há política nem privilégio de escrita em papéis
--   ou vínculos para anon/authenticated. Atribuições só por canal privilegiado
--   (service_role/seed), cujas alçadas reais aguardam DEC-071/JUR-06.
-- * Menores/responsáveis: vínculo do tipo responsável legal é REJEITADO por
--   trigger para QUALQUER papel, inclusive service_role, até JUR-02/JUR-11 e
--   decisão de Marina. Nenhum atributo de idade é armazenado.
-- * Pagador ≠ acesso acadêmico: o vínculo não concede leitura do perfil do aluno.
-- * Dados pessoais mínimos: perfil guarda só nome de exibição; e-mail fica no
--   schema `auth` do Supabase, fora da API pública.

-- ---------------------------------------------------------------------------
-- Schema privado para funções auxiliares (não exposto pela API de dados).
create schema if not exists private;
revoke all on schema private from public;
grant usage on schema private to authenticated, service_role;

-- ---------------------------------------------------------------------------
-- Tipos
create type public.app_role as enum ('student', 'payer', 'teacher', 'admin');
comment on type public.app_role is
  'Perfis previstos (CLAUDE.md §5). Grupos administrativos G1–G5 aguardam B-P04-01.';

create type public.account_link_kind as enum ('payer', 'guardian');
comment on type public.account_link_kind is
  'guardian (responsável legal) existe só para ser BLOQUEADO até JUR-02/JUR-11.';

create type public.account_link_status as enum ('active', 'revoked');

-- ---------------------------------------------------------------------------
-- Perfis (1:1 com auth.users)
create table public.profiles (
  id uuid primary key references auth.users (id) on delete restrict,
  display_name text not null
    check (char_length(trim(display_name)) between 1 and 120),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.profiles is
  'Identidade mínima. Não conter e-mail, documento, telefone ou data de nascimento.';

create trigger profiles_set_updated_at before update on public.profiles
  for each row execute function public.set_updated_at();

-- ---------------------------------------------------------------------------
-- Papéis, com histórico (revogação não apaga o registro)
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete restrict,
  role public.app_role not null,
  granted_at timestamptz not null default now(),
  granted_by uuid references public.profiles (id) on delete restrict,
  revoked_at timestamptz,
  revoked_by uuid references public.profiles (id) on delete restrict,
  check (revoked_at is null or revoked_at >= granted_at),
  check (revoked_by is null or revoked_at is not null)
);

create unique index user_roles_one_active_uq
  on public.user_roles (user_id, role) where revoked_at is null;
create index user_roles_user_id_idx on public.user_roles (user_id);

-- ---------------------------------------------------------------------------
-- Vínculos titular (pagador) → aluno
create table public.account_links (
  id uuid primary key default gen_random_uuid(),
  kind public.account_link_kind not null,
  holder_id uuid not null references public.profiles (id) on delete restrict,
  student_id uuid not null references public.profiles (id) on delete restrict,
  status public.account_link_status not null default 'active',
  created_at timestamptz not null default now(),
  revoked_at timestamptz,
  check (holder_id <> student_id),
  check ((status = 'revoked') = (revoked_at is not null))
);

create unique index account_links_one_active_uq
  on public.account_links (kind, holder_id, student_id) where status = 'active';
create index account_links_holder_id_idx on public.account_links (holder_id);
create index account_links_student_id_idx on public.account_links (student_id);

-- ---------------------------------------------------------------------------
-- Auditoria mínima, append-only (campos de P-04 §3). Sem senhas, tokens,
-- e-mails ou documentos. Retenção pendente (JUR-08).
create table public.audit_events (
  id bigint generated always as identity primary key,
  occurred_at timestamptz not null default now(),
  actor_id uuid,
  actor_db_role text not null,
  action text not null check (action ~ '^[a-z_]+\.[a-z_]+$'),
  object_type text not null,
  object_id uuid,
  outcome text not null check (outcome in ('allowed', 'denied')),
  reason text check (reason is null or char_length(reason) <= 500),
  correlation_id uuid
);

create index audit_events_occurred_at_idx on public.audit_events (occurred_at);

-- ---------------------------------------------------------------------------
-- Funções auxiliares
create function private.has_active_role(target uuid, wanted public.app_role)
returns boolean
language sql
stable
security invoker
set search_path = ''
as $$
  select exists (
    select 1 from public.user_roles r
    where r.user_id = target and r.role = wanted and r.revoked_at is null
  );
$$;

revoke all on function private.has_active_role(uuid, public.app_role) from public;
grant execute on function private.has_active_role(uuid, public.app_role)
  to authenticated, service_role;

-- Um vínculo pagador→aluno só é EFETIVO (visível a qualquer das pontas) se o
-- vínculo está ativo E o titular mantém papel de pagador ativo E o aluno
-- mantém papel de aluno ativo. Revogar qualquer desses três oculta o vínculo
-- para AMBAS as pontas (histórico preservado na tabela).
-- SECURITY DEFINER é necessário porque o RLS de user_roles só deixa cada
-- usuário ver os próprios papéis; a função responde apenas um booleano sobre
-- um vínculo e fica no schema `private`, fora da API de dados.
create function private.payer_link_is_effective(link_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.account_links l
    where l.id = link_id
      and l.kind = 'payer'
      and l.status = 'active'
      and exists (
        select 1 from public.user_roles r
        where r.user_id = l.holder_id and r.role = 'payer' and r.revoked_at is null
      )
      and exists (
        select 1 from public.user_roles r
        where r.user_id = l.student_id and r.role = 'student' and r.revoked_at is null
      )
  );
$$;

revoke all on function private.payer_link_is_effective(uuid) from public;
grant execute on function private.payer_link_is_effective(uuid)
  to authenticated, service_role;

-- Registra evento de auditoria para mudanças em papéis e vínculos.
create function private.audit_change() returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
declare
  v_action text;
  v_type text := case tg_table_name
    when 'user_roles' then 'user_role'
    when 'account_links' then 'account_link'
  end;
begin
  if tg_table_name = 'user_roles' then
    v_action := case
      when tg_op = 'INSERT' then 'role.grant'
      when old.revoked_at is null and new.revoked_at is not null then 'role.revoke'
      else 'role.update'
    end;
  else
    v_action := case
      when tg_op = 'INSERT' then 'link.create'
      when old.status = 'active' and new.status = 'revoked' then 'link.revoke'
      else 'link.update'
    end;
  end if;

  insert into public.audit_events (actor_id, actor_db_role, action, object_type, object_id, outcome)
  values (auth.uid(), current_user, v_action, v_type, new.id, 'allowed');
  return new;
end;
$$;

-- Papéis: imutáveis exceto a revogação (sem "desrevogar"); sem exclusão.
create function private.guard_user_roles() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'DELETE' then
    raise exception 'papéis não podem ser excluídos; revogue-os (histórico preservado)'
      using errcode = '42501';
  end if;
  if new.user_id is distinct from old.user_id
     or new.role is distinct from old.role
     or new.granted_at is distinct from old.granted_at
     or new.granted_by is distinct from old.granted_by then
    raise exception 'papel concedido é imutável; revogue e conceda novamente'
      using errcode = '42501';
  end if;
  if old.revoked_at is not null then
    raise exception 'papel revogado não pode ser reativado'
      using errcode = '42501';
  end if;
  return new;
end;
$$;

-- Vínculos: responsável legal bloqueado; pagador exige papéis corretos;
-- sem transferência (titular/aluno/tipo imutáveis); sem reativação; sem exclusão.
create function private.guard_account_links() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_op = 'DELETE' then
    raise exception 'vínculos não podem ser excluídos; revogue-os (histórico preservado)'
      using errcode = '42501';
  end if;

  if new.kind = 'guardian' then
    raise exception 'vínculo de responsável legal/menor bloqueado até parecer JUR-02/JUR-11 e decisão de Marina'
      using errcode = '42501';
  end if;

  if tg_op = 'INSERT' then
    if new.status <> 'active' then
      raise exception 'vínculo deve nascer ativo' using errcode = '23514';
    end if;
    if not private.has_active_role(new.holder_id, 'payer') then
      raise exception 'titular do vínculo precisa ter papel de pagador ativo'
        using errcode = '23514';
    end if;
    if not private.has_active_role(new.student_id, 'student') then
      raise exception 'aluno do vínculo precisa ter papel de aluno ativo'
        using errcode = '23514';
    end if;
    return new;
  end if;

  if new.holder_id is distinct from old.holder_id
     or new.student_id is distinct from old.student_id
     or new.kind is distinct from old.kind
     or new.created_at is distinct from old.created_at then
    raise exception 'vínculo não pode ser transferido; revogue e crie outro'
      using errcode = '42501';
  end if;
  if old.status = 'revoked' then
    raise exception 'vínculo revogado não pode ser reativado' using errcode = '42501';
  end if;
  return new;
end;
$$;

-- Auditoria: append-only.
create function private.guard_audit_events() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  raise exception 'eventos de auditoria são imutáveis' using errcode = '42501';
end;
$$;

create trigger user_roles_guard before update or delete on public.user_roles
  for each row execute function private.guard_user_roles();
create trigger user_roles_audit after insert or update on public.user_roles
  for each row execute function private.audit_change();

create trigger account_links_guard before insert or update or delete on public.account_links
  for each row execute function private.guard_account_links();
create trigger account_links_audit after insert or update on public.account_links
  for each row execute function private.audit_change();

create trigger audit_events_append_only before update or delete on public.audit_events
  for each row execute function private.guard_audit_events();

-- ---------------------------------------------------------------------------
-- Privilégios mínimos (substituem os grants amplos padrão nestas tabelas)
revoke all on table public.profiles, public.user_roles, public.account_links,
  public.audit_events from anon, authenticated;
revoke all on sequence public.audit_events_id_seq from anon, authenticated;

grant select on table public.profiles, public.user_roles, public.account_links
  to authenticated;
grant update (display_name) on table public.profiles to authenticated;

-- service_role (somente servidor) precisa registrar auditoria via triggers.
grant select, insert on table public.audit_events to service_role;
grant usage on sequence public.audit_events_id_seq to service_role;

-- ---------------------------------------------------------------------------
-- RLS
alter table public.profiles enable row level security;
alter table public.user_roles enable row level security;
alter table public.account_links enable row level security;
alter table public.audit_events enable row level security;

-- Perfil: somente o próprio.
create policy profiles_select_own on public.profiles
  for select to authenticated
  using (id = (select auth.uid()));

create policy profiles_update_own on public.profiles
  for update to authenticated
  using (id = (select auth.uid()))
  with check (id = (select auth.uid()));

-- Papéis: o usuário vê somente os próprios (inclui histórico de revogações).
create policy user_roles_select_own on public.user_roles
  for select to authenticated
  using (user_id = (select auth.uid()));

-- Vínculos: visíveis às duas pontas somente enquanto EFETIVOS — vínculo ativo
-- e papéis de pagador (titular) e aluno ativos. Revogar o vínculo, o papel do
-- pagador ou o papel do aluno encerra a visibilidade para AMBOS os lados.
create policy account_links_select_holder on public.account_links
  for select to authenticated
  using (
    holder_id = (select auth.uid())
    and private.payer_link_is_effective(id)
  );

create policy account_links_select_student on public.account_links
  for select to authenticated
  using (
    student_id = (select auth.uid())
    and private.payer_link_is_effective(id)
  );

-- audit_events: sem políticas → nenhum usuário lê (consulta por papel de
-- segurança aguarda JUR-08/B-P04-04).
