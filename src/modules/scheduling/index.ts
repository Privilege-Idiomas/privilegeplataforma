import {
  DisabledVideoConferenceProvider,
  type VideoConferenceProvider,
} from "./video-conference-provider";

export * from "./video-conference-provider";

/** F1: sempre desativado. */
export function getVideoConferenceProvider(): VideoConferenceProvider {
  return new DisabledVideoConferenceProvider();
}
