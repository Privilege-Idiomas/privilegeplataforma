import { describe, expect, it } from "vitest";
import {
  MockVideoConferenceProvider,
  VideoConferenceDisabledError,
  getVideoConferenceProvider,
} from "./index";

const request = {
  sessionReference: "sessao-ficticia",
  startsAt: new Date("2026-11-10T12:00:00Z"),
  durationMinutes: 20,
};

describe("videochamada na F1", () => {
  it("o provedor padrão é o desativado e nunca cria reuniões", async () => {
    const provider = getVideoConferenceProvider();
    expect(provider.id).toBe("disabled");
    await expect(provider.createMeeting(request)).rejects.toBeInstanceOf(
      VideoConferenceDisabledError,
    );
  });

  it("o mock usa domínio reservado .invalid", async () => {
    const meeting = await new MockVideoConferenceProvider().createMeeting(
      request,
    );
    expect(new URL(meeting.joinUrl).hostname.endsWith(".invalid")).toBe(true);
  });

  it("o mock rejeita duração inválida", async () => {
    await expect(
      new MockVideoConferenceProvider().createMeeting({
        ...request,
        durationMinutes: 0,
      }),
    ).rejects.toBeInstanceOf(RangeError);
  });
});
