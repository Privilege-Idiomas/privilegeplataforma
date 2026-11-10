import type { Course } from "@/modules/catalog";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function CourseList({ courses }: { courses: Course[] }) {
  if (courses.length === 0) {
    return <p className="text-muted">Nenhum curso cadastrado.</p>;
  }
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => {
        const lessonCount = course.modules.reduce(
          (n, m) => n + m.lessons.length,
          0,
        );
        return (
          <li key={course.id}>
            <Card className="flex h-full flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <h2 className="font-serif text-lg font-semibold">
                  {course.title}
                </h2>
                <Badge>
                  {course.status === "draft" ? "Rascunho" : course.status}
                </Badge>
              </div>
              {course.description && (
                <p className="text-muted text-sm">{course.description}</p>
              )}
              <p className="text-muted mt-auto text-xs">
                {course.modules.length}{" "}
                {course.modules.length === 1 ? "módulo" : "módulos"} ·{" "}
                {lessonCount} {lessonCount === 1 ? "aula" : "aulas"}
              </p>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
