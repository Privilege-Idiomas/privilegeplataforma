import { DisabledPaymentGateway, type PaymentGateway } from "./payment-gateway";

export * from "./payment-gateway";

/** F1: sempre desativado, independentemente de variáveis de ambiente. */
export function getPaymentGateway(): PaymentGateway {
  return new DisabledPaymentGateway();
}
