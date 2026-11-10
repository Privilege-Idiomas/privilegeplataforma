import { describe, expect, it } from "vitest";
import { parseAppEnv } from "./env";

describe("parseAppEnv", () => {
  it("aceita valores conhecidos", () => {
    expect(parseAppEnv("test")).toBe("test");
  });

  it("usa 'local' como padrão seguro para valores ausentes ou inválidos", () => {
    expect(parseAppEnv(undefined)).toBe("local");
    expect(parseAppEnv("qualquer")).toBe("local");
  });
});
