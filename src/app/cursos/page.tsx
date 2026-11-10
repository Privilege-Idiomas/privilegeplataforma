import type { Metadata } from "next";
import { CourseList } from "@/components/course-list";
import { Container } from "@/components/ui/container";
import { getCatalogRepository } from "@/modules/catalog";

export const metadata: Metadata = { title: "Cursos" };

export default async function CoursesPage() {
  const courses = await getCatalogRepository().listCourses();
  return (
    <Container className="flex flex-col gap-6">
      <header className="flex flex-col gap-2">
        <h1 className="font-serif text-3xl font-semibold">Cursos</h1>
        <p className="text-muted max-w-2xl text-sm">
          Catálogo de exemplo com dados fictícios. Planos, preços e regras de
          acesso não fazem parte desta fase.
        </p>
      </header>
      <CourseList courses={courses} />
    </Container>
  );
}
