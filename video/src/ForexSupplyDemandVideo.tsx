import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { F1_Intro } from "./scenes/ForexSD/F1_Intro";
import { F2_WhatIs } from "./scenes/ForexSD/F2_WhatIs";
import { F3_HowToFind } from "./scenes/ForexSD/F3_HowToFind";
import { F4_ZoneQuality } from "./scenes/ForexSD/F4_ZoneQuality";
import { F5_EntryRules } from "./scenes/ForexSD/F5_EntryRules";
import { F6_Mistakes } from "./scenes/ForexSD/F6_Mistakes";
import { F7_Closing } from "./scenes/ForexSD/F7_Closing";
import { theme } from "./theme";

// Scene timing (30 FPS)
// F1: Intro          — 0-210     (7s)
// F2: What Is        — 195-495   (10s)
// F3: How To Find    — 480-780   (10s)
// F4: Zone Quality   — 765-1065  (10s)
// F5: Entry Rules    — 1050-1350 (10s)
// F6: Mistakes       — 1335-1635 (10s)
// F7: Closing        — 1620-1920 (10s)
// Total: ~64 seconds

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

export const ForexSupplyDemandVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const musicVolume = interpolate(frame, [0, 30, 1860, 1920], [0, 0.3, 0.3, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ background: theme.bg }}>
      <Audio src={staticFile("bg-music.mp3")} volume={musicVolume} endAt={1920} />

      <Sequence from={0} durationInFrames={210}>
        <FadeTransition durationInFrames={210}>
          <F1_Intro />
        </FadeTransition>
      </Sequence>

      <Sequence from={195} durationInFrames={300}>
        <FadeTransition durationInFrames={300}>
          <F2_WhatIs />
        </FadeTransition>
      </Sequence>

      <Sequence from={480} durationInFrames={300}>
        <FadeTransition durationInFrames={300}>
          <F3_HowToFind />
        </FadeTransition>
      </Sequence>

      <Sequence from={765} durationInFrames={300}>
        <FadeTransition durationInFrames={300}>
          <F4_ZoneQuality />
        </FadeTransition>
      </Sequence>

      <Sequence from={1050} durationInFrames={300}>
        <FadeTransition durationInFrames={300}>
          <F5_EntryRules />
        </FadeTransition>
      </Sequence>

      <Sequence from={1335} durationInFrames={300}>
        <FadeTransition durationInFrames={300}>
          <F6_Mistakes />
        </FadeTransition>
      </Sequence>

      <Sequence from={1620} durationInFrames={300}>
        <FadeTransition durationInFrames={300}>
          <F7_Closing />
        </FadeTransition>
      </Sequence>
    </AbsoluteFill>
  );
};
