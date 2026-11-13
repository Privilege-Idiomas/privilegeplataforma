/**
 * F2.0 — smoke das rotas existentes (F1) + varredura automática de
 * acessibilidade (axe, WCAG 2.1 A/AA). Não testa telas da F2 (não autorizadas).
 */
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

/**
 * Violações PRÉ-EXISTENTES da UI provisória da F1, registradas na Issue #7 e
 * mantidas aqui de forma explícita e estreita (regra + seletor). Não foram
 * corrigidas porque alterar UI é escopo da F2.C (não autorizada), que
 * substituirá esta interface pelo design D1 R2 aprovado. Qualquer violação
 * grave/crítica NOVA continua reprovando o teste. Remover cada item quando a
 * F2.C for entregue.
 */
const KNOWN_F1_VIOLATIONS: ReadonlyArray<{ id: string; target: string }> = [
  // Dourado provisório #b08d3c (texto 12px) com contraste 2,99–3,12:1.
  { id: "color-contrast", target: ".text-accent" },
  // Link do logotipo: aria-label não contém o texto visível "Privilège Idiomas".
  { id: "label-content-name-mismatch", target: ".items-baseline" },
];

const isKnown = (id: string, target: string) =>
  KNOWN_F1_VIOLATIONS.some((k) => k.id === id && target.includes(k.target));

const ROUTES = [
  { path: "/", heading: "Plataforma Privilège de ensino de idiomas" },
  { path: "/cursos", heading: "Cursos" },
  { path: "/entrar", heading: "Entrar" },
];

for (const route of ROUTES) {
  test.describe(`rota ${route.path}`, () => {
    test("carrega sem erros de console e sem rolagem horizontal", async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
      page.on("pageerror", (e) => errors.push(e.message));

      const res = await page.goto(route.path);
      expect(res?.status()).toBe(200);
      await expect(
        page.getByRole("heading", { level: 1, name: route.heading }),
      ).toBeVisible();

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
      expect(errors).toEqual([]);
    });

    test("sem violações de acessibilidade críticas ou graves (axe)", async ({
      page,
    }, testInfo) => {
      await page.goto(route.path);
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      await testInfo.attach("axe-results.json", {
        body: JSON.stringify(results.violations, null, 2),
        contentType: "application/json",
      });
      const blocking = results.violations
        .filter((v) => v.impact === "critical" || v.impact === "serious")
        .flatMap((v) =>
          v.nodes
            .map((n) => ({ id: v.id, target: n.target.join(" ") }))
            .filter((n) => !isKnown(n.id, n.target)),
        )
        .map((n) => `${n.id}: ${n.target}`);
      expect(blocking).toEqual([]);
    });
  });
}

test("rota inexistente responde 404 com página própria", async ({ page }) => {
  const res = await page.goto("/rota-que-nao-existe");
  expect(res?.status()).toBe(404);
  await expect(
    page.getByRole("heading", { level: 1, name: "Página não encontrada" }),
  ).toBeVisible();
});

test("cabeçalhos de segurança da F1 continuam presentes", async ({
  request,
}) => {
  const res = await request.get("/");
  const h = res.headers();
  expect(h["x-content-type-options"]).toBe("nosniff");
  expect(h["x-frame-options"]).toBe("DENY");
  expect(h["x-powered-by"]).toBeUndefined();
});
