import { describe, expect, it } from "vitest";
import { AnonymousAuthProvider } from "./auth-provider";
import { DenyAllPolicy } from "./authorization";
import type { Role } from "./types";

describe("AnonymousAuthProvider", () => {
  it("nunca retorna sessão na F1", async () => {
    expect(await new AnonymousAuthProvider().getCurrentSession()).toBeNull();
  });
});

describe("DenyAllPolicy", () => {
  const policy = new DenyAllPolicy();
  const lesson = { type: "lesson", id: "00000000-0000-4000-8000-000000000301" };

  it("nega visitante anônimo", async () => {
    expect(await policy.can({ session: null }, "lesson:view", lesson)).toEqual({
      allowed: false,
      reason: "not_authenticated",
    });
  });

  it.each<Role>(["student", "payer", "teacher", "admin"])(
    "nega perfil %s sem política explícita",
    async (role) => {
      const decision = await policy.can(
        { session: { userId: "usuario-ficticio", roles: [role] } },
        "lesson:view",
        lesson,
      );
      expect(decision).toEqual({ allowed: false, reason: "no_policy" });
    },
  );
});
