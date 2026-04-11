import React from "react";
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from "remotion";
import { S1_Problem } from "./scenes/S1_Problem";
import { S2_OldWay } from "./scenes/S2_OldWay";
import { S3_Solution } from "./scenes/S3_Solution";
import { S4_Process } from "./scenes/S4_Process";
import { S5_Pricing } from "./scenes/S5_Pricing";
import { S6_Proof } from "./scenes/S6_Proof";
import { S7_CTA } from "./scenes/S7_CTA";
import { theme } from "./theme";

// Scene timing (30 FPS)
// Scene 1: Problem     — 0-450    (15s)
// Scene 2: Old Way     — 450-840  (13s)
// Scene 3: Solution    — 840-1440 (20s)
// Scene 4: Process     — 1440-1890 (15s)
// Scene 5: Pricing     — 1890-2340 (15s)
// Scene 6: Proof       — 2340-2640 (10s)
// Scene 7: CTA         — 2640-2940 (10s)

const FADE_DURATION = 15; // frames

const FadeTransition: React.FC<{ durationInFrames: number; children: React.ReactNode }> = ({
  durationInFrames,
  children,
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, FADE_DURATION], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - FADE_DURATION, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill style={{ opacity: Math.min(fadeIn, fadeOut) }}>
      {children}
    </AbsoluteFill>
  );
};

export const ClientFlowVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: theme.bg }}>
      <Sequence from={0} durationInFrames={450}>
        <FadeTransition durationInFrames={450}>
          <S1_Problem />
        </FadeTransition>
      </Sequence>

      <Sequence from={435} durationInFrames={405}>
        <FadeTransition durationInFrames={405}>
          <S2_OldWay />
        </FadeTransition>
      </Sequence>

      <Sequence from={825} durationInFrames={615}>
        <FadeTransition durationInFrames={615}>
          <S3_Solution />
        </FadeTransition>
      </Sequence>

      <Sequence from={1425} durationInFrames={465}>
        <FadeTransition durationInFrames={465}>
          <S4_Process />
        </FadeTransition>
      </Sequence>

      <Sequence from={1875} durationInFrames={465}>
        <FadeTransition durationInFrames={465}>
          <S5_Pricing />
        </FadeTransition>
      </Sequence>

      <Sequence from={2325} durationInFrames={315}>
        <FadeTransition durationInFrames={315}>
          <S6_Proof />
        </FadeTransition>
      </Sequence>

      <Sequence from={2625} durationInFrames={315}>
        <FadeTransition durationInFrames={315}>
          <S7_CTA />
        </FadeTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
