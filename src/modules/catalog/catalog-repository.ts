import type { Course, LearningPath } from "./types";

/**
 * Porta de leitura do catálogo. A F1 usa um adaptador em memória com dados
 * fictícios; a implementação com Supabase/Postgres entra em fase posterior.
 */
export interface CatalogRepository {
  listCourses(): Promise<Course[]>;
  getCourseBySlug(slug: string): Promise<Course | null>;
  listLearningPaths(): Promise<LearningPath[]>;
}
