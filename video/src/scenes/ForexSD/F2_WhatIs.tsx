import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { theme, fonts } from "../../theme";

const ConceptBox: React.FC<{
  title: string;
  description: string;
  color: string;
  startFrame: number;
}> = ({ title, description, color, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [startFrame, startFrame + 20], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        padding: "32px 40px",
        borderRadius: 16,
        border: `1px solid ${color}40`,
        background: `${color}08`,
        width: 420,
      }}
    >
      <div style={{ fontSize: 32, fontWeight: 700, color, fontFamily: fonts.sans }}>
        {title}
      </div>
      <div style={{ fontSize: 20, color: theme.muted, fontFamily: fonts.sans, lineHeight: 1.5, fontWeight: 400 }}>
        {description}
      </div>
    </div>
  );
};

export const F2_WhatIs: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 30,
      }}
    >
      <Badge text="THE BASICS" startFrame={5} />

      <AnimatedText
        text="Two Forces Move Every Market"
        startFrame={15}
        fontSize={44}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 10 }} />

      <div style={{ display: "flex", gap: 30 }}>
        <ConceptBox
          title="Supply Zone"
          description="Where big sellers entered. Price dropped hard from this level. When price returns here, sellers step in again."
          color="#ef4444"
          startFrame={50}
        />

        <ConceptBox
          title="Demand Zone"
          description="Where big buyers entered. Price rallied hard from this level. When price returns here, buyers step in again."
          color="#22c55e"
          startFrame={70}
        />
      </div>

      <AnimatedText
        text="Banks leave footprints. Zones are the footprints."
        startFrame={110}
        fontSize={22}
        color={theme.accent}
        fontWeight={500}
      />
    </AbsoluteFill>
  );
};
