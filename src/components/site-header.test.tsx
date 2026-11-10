// @vitest-environment jsdom
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DevBanner } from "./dev-banner";
import { SiteHeader } from "./site-header";

describe("SiteHeader", () => {
  it("exibe navegação principal", () => {
    render(<SiteHeader />);
    const nav = screen.getByRole("navigation", { name: "Principal" });
    expect(nav).toBeInTheDocument();
    for (const label of ["Início", "Cursos", "Entrar"]) {
      expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
    }
  });
});

describe("DevBanner", () => {
  it("avisa que os dados são fictícios fora de produção", () => {
    render(<DevBanner env="local" />);
    expect(screen.getByRole("note")).toHaveTextContent(
      "dados exibidos são fictícios",
    );
  });

  it("não aparece em produção", () => {
    const { container } = render(<DevBanner env="production" />);
    expect(container).toBeEmptyDOMElement();
  });
});
