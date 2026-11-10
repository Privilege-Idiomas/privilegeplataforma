// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FICTIONAL_COURSES } from "@/modules/catalog/fixtures";
import { CourseList } from "./course-list";

describe("CourseList", () => {
  it("renderiza um item por curso com contagem de módulos e aulas", () => {
    render(<CourseList courses={FICTIONAL_COURSES} />);
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(
      screen.getByRole("heading", { name: "[FICTÍCIO] Basic English" }),
    ).toBeInTheDocument();
    expect(screen.getByText("2 módulos · 3 aulas")).toBeInTheDocument();
  });

  it("exibe estado vazio", () => {
    render(<CourseList courses={[]} />);
    expect(screen.getByText("Nenhum curso cadastrado.")).toBeInTheDocument();
  });
});
