import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { GoldGlow } from "../../components/GoldGlow";
import { theme, fonts } from "../../theme";

const SpeedRow: React.FC<{
  task: string;
  human: string;
  ai: string;
  compression: string;
  startFrame: number;
}> = ({ task, human, ai, compression, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        display: "flex",
        alignItems: "center",
        width: 850,
        gap: 10,
      }}
    >
      <div style={{ flex: 1, fontSize: 20, color: theme.fg, fontFamily: fonts.sans, fontWeight: 600 }}>
        {task}
      </div>
      <div style={{ width: 140, fontSize: 18, color: theme.mutedDim, fontFamily: fonts.mono, textAlign: "center", textDecoration: "line-through" }}>
        {human}
      </div>
      <div style={{ width: 120, fontSize: 20, color: theme.accent, fontFamily: fonts.mono, fontWeight: 700, textAlign: "center" }}>
        {ai}
      </div>
      <div style={{ width: 80, fontSize: 16, color: theme.accentLight, fontFamily: fonts.mono, textAlign: "right" }}>
        {compression}
      </div>
    </div>
  );
};

export const S6_Speed: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <GoldGlow startFrame={0} size={500} />

      <Badge text="SPEED" startFrame={5} />

      <AnimatedText
        text="What Takes a Team Days, Takes You Minutes"
        startFrame={15}
        fontSize={40}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 8 }} />

      {/* Header */}
      <div style={{ display: "flex", width: 850, gap: 10, paddingBottom: 8, borderBottom: `1px solid ${theme.border}` }}>
        <div style={{ flex: 1, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Task</div>
        <div style={{ width: 140, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textAlign: "center", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Team</div>
        <div style={{ width: 120, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textAlign: "center", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>You</div>
        <div style={{ width: 80, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textAlign: "right", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Gain</div>
      </div>

      <SpeedRow task="Scaffold a Feature" human="2 days" ai="15 min" compression="100x" startFrame={50} />
      <SpeedRow task="Write Full Tests" human="1 day" ai="15 min" compression="50x" startFrame={65} />
      <SpeedRow task="Build End-to-End" human="1 week" ai="30 min" compression="30x" startFrame={80} />
      <SpeedRow task="Bug Fix + Regression Test" human="4 hours" ai="15 min" compression="20x" startFrame={95} />
      <SpeedRow task="Architecture Design" human="2 days" ai="4 hours" compression="5x" startFrame={110} />
    </AbsoluteFill>
  );
};
