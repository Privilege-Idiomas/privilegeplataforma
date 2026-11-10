/**
 * Catálogo: estrutura de conteúdo (curso → módulo → aula) e trilhas.
 * Curso, trilha e direito de acesso são conceitos distintos (CLAUDE.md §7):
 * nada aqui concede ou verifica acesso.
 */

export type ContentStatus = "draft" | "published" | "archived";

export interface Lesson {
  id: string;
  position: number;
  title: string;
  status: ContentStatus;
}

export interface CourseModule {
  id: string;
  position: number;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  status: ContentStatus;
  modules: CourseModule[];
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  status: ContentStatus;
  /** IDs de cursos existentes, na ordem recomendada. A trilha não duplica cursos. */
  courseIds: string[];
}
