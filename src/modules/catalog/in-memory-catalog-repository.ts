import type { CatalogRepository } from "./catalog-repository";
import { FICTIONAL_COURSES, FICTIONAL_LEARNING_PATHS } from "./fixtures";
import type { Course, LearningPath } from "./types";

/** Adaptador em memória (somente desenvolvimento/testes). Retorna cópias. */
export class InMemoryCatalogRepository implements CatalogRepository {
  constructor(
    private readonly courses: Course[] = FICTIONAL_COURSES,
    private readonly learningPaths: LearningPath[] = FICTIONAL_LEARNING_PATHS,
  ) {}

  async listCourses(): Promise<Course[]> {
    return structuredClone(this.courses);
  }

  async getCourseBySlug(slug: string): Promise<Course | null> {
    const course = this.courses.find((c) => c.slug === slug);
    return course ? structuredClone(course) : null;
  }

  async listLearningPaths(): Promise<LearningPath[]> {
    return structuredClone(this.learningPaths);
  }
}
