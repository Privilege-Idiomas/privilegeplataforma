-- F1 — Fundação técnica (Issue #6): esquema inicial de catálogo e trilhas.
--
-- Escopo: somente estrutura de conteúdo (curso → módulo → aula) e trilhas que
-- REFERENCIAM cursos existentes, sem duplicá-los (CLAUDE.md §7).
-- Fora do escopo da F1: pessoas/perfis, direitos de acesso, planos, preços,
-- pagamentos, agenda, avaliações e progresso. Nenhum dado pessoal.
--
-- Migração aditiva e não destrutiva: não há DROP/TRUNCATE; chaves estrangeiras
-- usam ON DELETE RESTRICT para impedir remoção acidental em cascata.
--
-- Segurança: RLS habilitado em todas as tabelas SEM políticas. Pelo PostgREST do
-- Supabase, os papéis anon/authenticated ficam negados por padrão até que a F2
-- defina políticas explícitas (menor privilégio).

create table public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique
    check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (length(trim(title)) > 0),
  description text,
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.courses is
  'Curso do catálogo. Direito comercial de acesso é conceito separado (F3/F5).';

create table public.course_modules (
  id uuid primary key default gen_random_uuid(),
  course_id uuid not null references public.courses (id) on delete restrict,
  position integer not null check (position > 0),
  title text not null check (length(trim(title)) > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (course_id, position)
);

create index course_modules_course_id_idx on public.course_modules (course_id);

create table public.lessons (
  id uuid primary key default gen_random_uuid(),
  module_id uuid not null references public.course_modules (id) on delete restrict,
  position integer not null check (position > 0),
  title text not null check (length(trim(title)) > 0),
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (module_id, position)
);

create index lessons_module_id_idx on public.lessons (module_id);

create table public.learning_paths (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique
    check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  title text not null check (length(trim(title)) > 0),
  description text,
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.learning_paths is
  'Trilha: ordena cursos existentes. Não concede acesso (direitos verificados à parte).';

create table public.learning_path_courses (
  learning_path_id uuid not null references public.learning_paths (id) on delete restrict,
  course_id uuid not null references public.courses (id) on delete restrict,
  position integer not null check (position > 0),
  primary key (learning_path_id, course_id),
  unique (learning_path_id, position)
);

create index learning_path_courses_course_id_idx on public.learning_path_courses (course_id);

-- Mantém updated_at coerente em atualizações.
create function public.set_updated_at() returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger courses_set_updated_at before update on public.courses
  for each row execute function public.set_updated_at();
create trigger course_modules_set_updated_at before update on public.course_modules
  for each row execute function public.set_updated_at();
create trigger lessons_set_updated_at before update on public.lessons
  for each row execute function public.set_updated_at();
create trigger learning_paths_set_updated_at before update on public.learning_paths
  for each row execute function public.set_updated_at();

-- Nega por padrão (sem políticas) até a F2.
alter table public.courses enable row level security;
alter table public.course_modules enable row level security;
alter table public.lessons enable row level security;
alter table public.learning_paths enable row level security;
alter table public.learning_path_courses enable row level security;
