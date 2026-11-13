import { defineConfig, devices } from "@playwright/test";

/**
 * Smoke e2e + acessibilidade (F2.0). Usa o Google Chrome já instalado
 * (local e runners do GitHub) — nenhum navegador é baixado.
 * Sobe a aplicação em modo produção numa porta própria.
 */
const PORT = 3200;

export default defineConfig({
  testDir: "./e2e",
  outputDir: "./test-results",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI
    ? [["list"], ["html", { open: "never", outputFolder: "playwright-report" }]]
    : "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    channel: "chrome",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
    { name: "celular", use: { ...devices["Pixel 7"], channel: "chrome" } },
  ],
  webServer: {
    command: `npm run build && npm run start -- -p ${PORT}`,
    url: `http://127.0.0.1:${PORT}/api/health`,
    reuseExistingServer: !process.env.CI,
    timeout: 240_000,
    env: { NEXT_TELEMETRY_DISABLED: "1" },
  },
});
