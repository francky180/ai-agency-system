import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { S1_Title } from "./scenes/SystemSummary/S1_Title";
import { S2_ThreeLayers } from "./scenes/SystemSummary/S2_ThreeLayers";
import { S3_Sprint } from "./scenes/SystemSummary/S3_Sprint";
import { S4_Specialists } from "./scenes/SystemSummary/S4_Specialists";
import { S5_HardRules } from "./scenes/SystemSummary/S5_HardRules";
import { S6_Speed } from "./scenes/SystemSummary/S6_Speed";
import { S7_Closing } from "./scenes/SystemSummary/S7_Closing";
import { theme } from "./theme";

// Scene timing (30 FPS)
// Scene 1: Title          — 0-180     (6s)
// Scene 2: Three Layers   — 165-435   (9s)
// Scene 3: Sprint         — 420-690   (9s)
// Scene 4: Specialists    — 675-945   (9s)
// Scene 5: Hard Rules     — 930-1170  (8s)
// Scene 6: Speed          — 1155-1425 (9s)
// Scene 7: Closing        — 1410-1680 (9s)
// Total: ~56 seconds

const FADE = 15;

const FadeTransition: React.FC<{
  durationInFrames: number;
  children: React.ReactNode;
}> = ({ durationInFrames, children }) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, FADE], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - FADE, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ opacity: Math.min(fadeIn, fadeOut) }}>
      {children}
    </AbsoluteFill>
  );
};

export const SystemSummaryVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade music out over last 2 seconds
  const musicVolume = interpolate(frame, [0, 30, 1620, 1680], [0, 0.35, 0.35, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: theme.bg }}>
      <Audio src={staticFile("bg-music.mp3")} volume={musicVolume} endAt={1680} />

      <Sequence from={0} durationInFrames={180}>
        <FadeTransition durationInFrames={180}>
          <S1_Title />
        </FadeTransition>
      </Sequence>

      <Sequence from={165} durationInFrames={270}>
        <FadeTransition durationInFrames={270}>
          <S2_ThreeLayers />
        </FadeTransition>
      </Sequence>

      <Sequence from={420} durationInFrames={270}>
        <FadeTransition durationInFrames={270}>
          <S3_Sprint />
        </FadeTransition>
      </Sequence>

      <Sequence from={675} durationInFrames={270}>
        <FadeTransition durationInFrames={270}>
          <S4_Specialists />
        </FadeTransition>
      </Sequence>

      <Sequence from={930} durationInFrames={240}>
        <FadeTransition durationInFrames={240}>
          <S5_HardRules />
        </FadeTransition>
      </Sequence>

      <Sequence from={1155} durationInFrames={270}>
        <FadeTransition durationInFrames={270}>
          <S6_Speed />
        </FadeTransition>
      </Sequence>

      <Sequence from={1410} durationInFrames={270}>
        <FadeTransition durationInFrames={270}>
          <S7_Closing />
        </FadeTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
