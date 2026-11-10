import type { Course, LearningPath } from "./types";

/**
 * Dados 100% FICTÍCIOS para desenvolvimento local (F1).
 * Espelham supabase/seed.sql — um teste automatizado garante a sincronia.
 * Não representam conteúdo pedagógico, preços ou planos aprovados.
 */

const DESCRIPTION = "Curso de exemplo para desenvolvimento local.";

export const FICTIONAL_COURSES: Course[] = [
  {
    id: "00000000-0000-4000-8000-000000000101",
    slug: "basic-english",
    title: "[FICTÍCIO] Basic English",
    description: DESCRIPTION,
    status: "draft",
    modules: [
      {
        id: "00000000-0000-4000-8000-000000000201",
        position: 1,
        title: "[FICTÍCIO] Módulo 1",
        lessons: [
          {
            id: "00000000-0000-4000-8000-000000000301",
            position: 1,
            title: "[FICTÍCIO] Aula 1",
            status: "draft",
          },
          {
            id: "00000000-0000-4000-8000-000000000302",
            position: 2,
            title: "[FICTÍCIO] Aula 2",
            status: "draft",
          },
        ],
      },
      {
        id: "00000000-0000-4000-8000-000000000202",
        position: 2,
        title: "[FICTÍCIO] Módulo 2",
        lessons: [
          {
            id: "00000000-0000-4000-8000-000000000303",
            position: 1,
            title: "[FICTÍCIO] Aula 1",
            status: "draft",
          },
        ],
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000102",
    slug: "travel",
    title: "[FICTÍCIO] Travel",
    description: DESCRIPTION,
    status: "draft",
    modules: [
      {
        id: "00000000-0000-4000-8000-000000000203",
        position: 1,
        title: "[FICTÍCIO] Módulo 1",
        lessons: [
          {
            id: "00000000-0000-4000-8000-000000000304",
            position: 1,
            title: "[FICTÍCIO] Aula 1",
            status: "draft",
          },
        ],
      },
    ],
  },
  {
    id: "00000000-0000-4000-8000-000000000103",
    slug: "business",
    title: "[FICTÍCIO] Business",
    description: DESCRIPTION,
    status: "draft",
    modules: [
      {
        id: "00000000-0000-4000-8000-000000000204",
        position: 1,
        title: "[FICTÍCIO] Módulo 1",
        lessons: [
          {
            id: "00000000-0000-4000-8000-000000000305",
            position: 1,
            title: "[FICTÍCIO] Aula 1",
            status: "draft",
          },
        ],
      },
    ],
  },
];

export const FICTIONAL_LEARNING_PATHS: LearningPath[] = [
  {
    id: "00000000-0000-4000-8000-000000000401",
    slug: "trilha-exemplo",
    title: "[FICTÍCIO] Trilha de exemplo",
    description:
      "Demonstra uma trilha que referencia cursos existentes sem duplicá-los.",
    status: "draft",
    courseIds: [
      "00000000-0000-4000-8000-000000000101",
      "00000000-0000-4000-8000-000000000103",
    ],
  },
];
