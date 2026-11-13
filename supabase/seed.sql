-- Seed de DESENVOLVIMENTO LOCAL — dados 100% FICTÍCIOS (F1, Issue #6).
-- Não contém pessoas, e-mails, preços, planos nem conteúdo pedagógico aprovado.
-- Os títulos marcados com [FICTÍCIO] são apenas para demonstrar a estrutura.
-- Deve permanecer em sincronia com src/modules/catalog/fixtures.ts (teste automatizado).

insert into public.courses (id, slug, title, description, status) values
  ('00000000-0000-4000-8000-000000000101', 'basic-english', '[FICTÍCIO] Basic English',
   'Curso de exemplo para desenvolvimento local.', 'draft'),
  ('00000000-0000-4000-8000-000000000102', 'travel', '[FICTÍCIO] Travel',
   'Curso de exemplo para desenvolvimento local.', 'draft'),
  ('00000000-0000-4000-8000-000000000103', 'business', '[FICTÍCIO] Business',
   'Curso de exemplo para desenvolvimento local.', 'draft');

insert into public.course_modules (id, course_id, position, title) values
  ('00000000-0000-4000-8000-000000000201', '00000000-0000-4000-8000-000000000101', 1, '[FICTÍCIO] Módulo 1'),
  ('00000000-0000-4000-8000-000000000202', '00000000-0000-4000-8000-000000000101', 2, '[FICTÍCIO] Módulo 2'),
  ('00000000-0000-4000-8000-000000000203', '00000000-0000-4000-8000-000000000102', 1, '[FICTÍCIO] Módulo 1'),
  ('00000000-0000-4000-8000-000000000204', '00000000-0000-4000-8000-000000000103', 1, '[FICTÍCIO] Módulo 1');

insert into public.lessons (id, module_id, position, title) values
  ('00000000-0000-4000-8000-000000000301', '00000000-0000-4000-8000-000000000201', 1, '[FICTÍCIO] Aula 1'),
  ('00000000-0000-4000-8000-000000000302', '00000000-0000-4000-8000-000000000201', 2, '[FICTÍCIO] Aula 2'),
  ('00000000-0000-4000-8000-000000000303', '00000000-0000-4000-8000-000000000202', 1, '[FICTÍCIO] Aula 1'),
  ('00000000-0000-4000-8000-000000000304', '00000000-0000-4000-8000-000000000203', 1, '[FICTÍCIO] Aula 1'),
  ('00000000-0000-4000-8000-000000000305', '00000000-0000-4000-8000-000000000204', 1, '[FICTÍCIO] Aula 1');

insert into public.learning_paths (id, slug, title, description, status) values
  ('00000000-0000-4000-8000-000000000401', 'trilha-exemplo', '[FICTÍCIO] Trilha de exemplo',
   'Demonstra uma trilha que referencia cursos existentes sem duplicá-los.', 'draft');

insert into public.learning_path_courses (learning_path_id, course_id, position) values
  ('00000000-0000-4000-8000-000000000401', '00000000-0000-4000-8000-000000000101', 1),
  ('00000000-0000-4000-8000-000000000401', '00000000-0000-4000-8000-000000000103', 2);

-- ---------------------------------------------------------------------------
-- F2.A — identidades 100% FICTÍCIAS para testes de isolamento (Issue #7).
-- E-mails em domínio reservado (.invalid, RFC 2606); sem senha utilizável
-- (login é escopo da F2.B, não autorizado). Nenhum menor de idade.
-- Deve permanecer em sincronia com tests/db/identities.ts.

insert into auth.users (instance_id, id, aud, role, email, encrypted_password,
                        raw_app_meta_data, raw_user_meta_data, created_at, updated_at) values
  ('00000000-0000-0000-0000-000000000000', '00000000-0000-4000-8000-00000000a001', 'authenticated', 'authenticated', 'aluno.a@example.invalid', '', '{}', '{}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '00000000-0000-4000-8000-00000000a002', 'authenticated', 'authenticated', 'aluno.b@example.invalid', '', '{}', '{}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '00000000-0000-4000-8000-00000000a003', 'authenticated', 'authenticated', 'pagador@example.invalid', '', '{}', '{}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '00000000-0000-4000-8000-00000000a004', 'authenticated', 'authenticated', 'professor@example.invalid', '', '{}', '{}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '00000000-0000-4000-8000-00000000a005', 'authenticated', 'authenticated', 'admin@example.invalid', '', '{}', '{}', now(), now()),
  ('00000000-0000-0000-0000-000000000000', '00000000-0000-4000-8000-00000000a006', 'authenticated', 'authenticated', 'sem.papel@example.invalid', '', '{}', '{}', now(), now());

insert into public.profiles (id, display_name) values
  ('00000000-0000-4000-8000-00000000a001', '[FICTÍCIO] Aluno A'),
  ('00000000-0000-4000-8000-00000000a002', '[FICTÍCIO] Aluno B'),
  ('00000000-0000-4000-8000-00000000a003', '[FICTÍCIO] Pagador'),
  ('00000000-0000-4000-8000-00000000a004', '[FICTÍCIO] Professor'),
  ('00000000-0000-4000-8000-00000000a005', '[FICTÍCIO] Admin'),
  ('00000000-0000-4000-8000-00000000a006', '[FICTÍCIO] Sem papel');

insert into public.user_roles (id, user_id, role) values
  ('00000000-0000-4000-8000-00000000b001', '00000000-0000-4000-8000-00000000a001', 'student'),
  ('00000000-0000-4000-8000-00000000b002', '00000000-0000-4000-8000-00000000a002', 'student'),
  ('00000000-0000-4000-8000-00000000b003', '00000000-0000-4000-8000-00000000a003', 'payer'),
  ('00000000-0000-4000-8000-00000000b004', '00000000-0000-4000-8000-00000000a004', 'teacher'),
  ('00000000-0000-4000-8000-00000000b005', '00000000-0000-4000-8000-00000000a005', 'admin');

-- Pagador com dois alunos (cenário P-04 §4, regra 2).
insert into public.account_links (id, kind, holder_id, student_id) values
  ('00000000-0000-4000-8000-00000000c001', 'payer', '00000000-0000-4000-8000-00000000a003', '00000000-0000-4000-8000-00000000a001'),
  ('00000000-0000-4000-8000-00000000c002', 'payer', '00000000-0000-4000-8000-00000000a003', '00000000-0000-4000-8000-00000000a002');
