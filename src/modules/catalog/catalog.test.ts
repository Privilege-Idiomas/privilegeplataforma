import { describe, expect, it } from "vitest";
import { FICTIONAL_COURSES } from "./fixtures";
import { InMemoryCatalogRepository } from "./in-memory-catalog-repository";

describe("InMemoryCatalogRepository", () => {
  const repo = new InMemoryCatalogRepository();

  it("lista os cursos fictícios", async () => {
    const courses = await repo.listCourses();
    expect(courses.map((c) => c.slug)).toEqual([
      "basic-english",
      "travel",
      "business",
    ]);
  });

  it("marca todo conteúdo de exemplo como fictício", async () => {
    const courses = await repo.listCourses();
    for (const course of courses) {
      expect(course.title).toMatch(/^\[FICTÍCIO\]/);
      for (const mod of course.modules) {
        expect(mod.title).toMatch(/^\[FICTÍCIO\]/);
        for (const lesson of mod.lessons) {
          expect(lesson.title).toMatch(/^\[FICTÍCIO\]/);
        }
      }
    }
  });

  it("busca curso por slug e retorna null quando inexistente", async () => {
    expect((await repo.getCourseBySlug("travel"))?.title).toBe(
      "[FICTÍCIO] Travel",
    );
    expect(await repo.getCourseBySlug("inexistente")).toBeNull();
  });

  it("trilhas referenciam apenas cursos existentes, sem duplicá-los", async () => {
    const courses = await repo.listCourses();
    const ids = new Set(courses.map((c) => c.id));
    for (const path of await repo.listLearningPaths()) {
      expect(path.courseIds.every((id) => ids.has(id))).toBe(true);
      expect(new Set(path.courseIds).size).toBe(path.courseIds.length);
    }
  });

  it("retorna cópias, protegendo os dados de origem", async () => {
    const courses = await repo.listCourses();
    courses[0]!.title = "alterado";
    expect(FICTIONAL_COURSES[0]!.title).toBe("[FICTÍCIO] Basic English");
  });
});
