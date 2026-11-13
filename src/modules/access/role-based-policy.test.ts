import { describe, expect, it } from "vitest";
import { InMemoryAuditSink } from "./audit";
import { RoleBasedPolicy } from "./role-based-policy";
import type { Actor, Role } from "./types";

const ALUNO_A = "00000000-0000-4000-8000-00000000a001";
const ALUNO_B = "00000000-0000-4000-8000-00000000a002";

const actor = (userId: string, roles: Role[]): Actor => ({
  session: { userId, roles },
});
const profile = (id: string) => ({ type: "profile", id });

describe("RoleBasedPolicy", () => {
  it("permite ler e editar o próprio perfil", async () => {
    const policy = new RoleBasedPolicy();
    const a = actor(ALUNO_A, ["student"]);
    expect(await policy.can(a, "profile:read", profile(ALUNO_A))).toEqual({
      allowed: true,
    });
    expect(
      await policy.can(a, "profile:update_display_name", profile(ALUNO_A)),
    ).toEqual({ allowed: true });
  });

  it("IDOR: nega perfil de outro titular e registra a negação", async () => {
    const audit = new InMemoryAuditSink();
    const policy = new RoleBasedPolicy(audit);
    const decision = await policy.can(
      actor(ALUNO_A, ["student"]),
      "profile:read",
      profile(ALUNO_B),
    );
    expect(decision).toEqual({ allowed: false, reason: "not_owner" });
    expect(audit.events).toEqual([
      {
        actorId: ALUNO_A,
        action: "profile:read",
        objectType: "profile",
        objectId: ALUNO_B,
        outcome: "denied",
        reason: "not_owner",
      },
    ]);
  });

  it("nega visitante anônimo", async () => {
    expect(
      await new RoleBasedPolicy().can(
        { session: null },
        "profile:read",
        profile(ALUNO_A),
      ),
    ).toEqual({ allowed: false, reason: "not_authenticated" });
  });

  it.each<Role>(["student", "payer", "teacher", "admin"])(
    "autopromoção e concessões negadas para %s (alçada pendente)",
    async (role) => {
      const policy = new RoleBasedPolicy();
      for (const action of [
        "role:grant",
        "link:create",
        "link:create_guardian",
      ]) {
        expect(
          await policy.can(actor(ALUNO_A, [role]), action, profile(ALUNO_A)),
        ).toEqual({ allowed: false, reason: "pending_authority" });
      }
    },
  );

  it("admin sem alçada não lê dados de terceiros nem a auditoria", async () => {
    const policy = new RoleBasedPolicy();
    const admin = actor(ALUNO_B, ["admin"]);
    expect(await policy.can(admin, "profile:read", profile(ALUNO_A))).toEqual({
      allowed: false,
      reason: "not_owner",
    });
    expect(
      await policy.can(admin, "audit:read", { type: "audit", id: "*" }),
    ).toEqual({ allowed: false, reason: "pending_authority" });
  });

  it("ação desconhecida ou tipo de recurso divergente é negado", async () => {
    const policy = new RoleBasedPolicy();
    const a = actor(ALUNO_A, ["student"]);
    expect(
      await policy.can(a, "lesson:view", { type: "lesson", id: "x" }),
    ).toEqual({ allowed: false, reason: "no_policy" });
    expect(
      await policy.can(a, "profile:read", { type: "lesson", id: ALUNO_A }),
    ).toEqual({ allowed: false, reason: "no_policy" });
  });

  it("não registra eventos quando a ação é permitida", async () => {
    const audit = new InMemoryAuditSink();
    await new RoleBasedPolicy(audit).can(
      actor(ALUNO_A, ["student"]),
      "roles:read",
      profile(ALUNO_A),
    );
    expect(audit.events).toEqual([]);
  });
});
