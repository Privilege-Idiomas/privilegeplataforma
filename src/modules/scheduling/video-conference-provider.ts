/**
 * Agenda: a lotação, reservas e créditos serão geridos pelo próprio sistema
 * (F6). A videochamada fica atrás desta porta — NENHUM fornecedor escolhido.
 */

export interface MeetingRequest {
  /** Referência interna opaca da sessão agendada. */
  sessionReference: string;
  startsAt: Date;
  durationMinutes: number;
}

export interface Meeting {
  providerReference: string;
  joinUrl: string;
}

export interface VideoConferenceProvider {
  readonly id: string;
  createMeeting(request: MeetingRequest): Promise<Meeting>;
}

export class VideoConferenceDisabledError extends Error {
  constructor() {
    super("Videochamada desativada: nenhum fornecedor contratado.");
    this.name = "VideoConferenceDisabledError";
  }
}

/** F1: adaptador padrão. Nunca cria reuniões. */
export class DisabledVideoConferenceProvider implements VideoConferenceProvider {
  readonly id = "disabled";

  async createMeeting(): Promise<Meeting> {
    throw new VideoConferenceDisabledError();
  }
}

/** Mock para testes: URL em domínio reservado `.invalid` (RFC 2606). */
export class MockVideoConferenceProvider implements VideoConferenceProvider {
  readonly id = "mock";

  async createMeeting(request: MeetingRequest): Promise<Meeting> {
    if (
      !Number.isInteger(request.durationMinutes) ||
      request.durationMinutes <= 0
    ) {
      throw new RangeError("durationMinutes deve ser inteiro positivo");
    }
    const ref = `mock_${request.sessionReference}`;
    return {
      providerReference: ref,
      joinUrl: `https://meet.example.invalid/${ref}`,
    };
  }
}
