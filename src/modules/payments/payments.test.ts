import { describe, expect, it } from "vitest";
import {
  MockPaymentGateway,
  PaymentsDisabledError,
  getPaymentGateway,
} from "./index";

const request = { reference: "ref-ficticia", idempotencyKey: "chave-1" };

describe("pagamentos na F1", () => {
  it("o gateway padrão é o desativado e recusa qualquer cobrança", async () => {
    const gateway = getPaymentGateway();
    expect(gateway.id).toBe("disabled");
    await expect(gateway.createCheckout(request)).rejects.toBeInstanceOf(
      PaymentsDisabledError,
    );
  });

  it("o mock é determinístico e apenas registra a chamada", async () => {
    const mock = new MockPaymentGateway();
    const result = await mock.createCheckout(request);
    expect(result).toEqual({
      providerReference: "mock_chave-1",
      status: "pending",
    });
    expect(mock.calls).toEqual([request]);
  });
});
