/**
 * Pagamentos: porta neutra de fornecedor. NENHUM gateway foi escolhido
 * (docs/34 §2; CLAUDE.md). Planos, preços, ciclos e regras de cobrança
 * ainda não estão definidos — por isso os tipos aqui são mínimos e genéricos.
 */

export interface CheckoutRequest {
  /** Referência interna opaca ao que será contratado (definido na F5). */
  reference: string;
  /** Chave de idempotência obrigatória para evitar cobranças duplicadas. */
  idempotencyKey: string;
}

export interface CheckoutResult {
  providerReference: string;
  status: "pending" | "requires_action" | "failed";
}

export interface PaymentGateway {
  readonly id: string;
  createCheckout(request: CheckoutRequest): Promise<CheckoutResult>;
}

export class PaymentsDisabledError extends Error {
  constructor() {
    super(
      "Pagamentos desativados: nenhum gateway contratado nem cobrança autorizada.",
    );
    this.name = "PaymentsDisabledError";
  }
}

/** F1: adaptador padrão. Recusa toda operação — nunca cobra. */
export class DisabledPaymentGateway implements PaymentGateway {
  readonly id = "disabled";

  async createCheckout(): Promise<CheckoutResult> {
    throw new PaymentsDisabledError();
  }
}

/**
 * Mock determinístico apenas para testes de orquestração. Não realiza
 * chamadas de rede nem transações.
 */
export class MockPaymentGateway implements PaymentGateway {
  readonly id = "mock";
  readonly calls: CheckoutRequest[] = [];

  async createCheckout(request: CheckoutRequest): Promise<CheckoutResult> {
    this.calls.push(request);
    return {
      providerReference: `mock_${request.idempotencyKey}`,
      status: "pending",
    };
  }
}
