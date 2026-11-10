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
