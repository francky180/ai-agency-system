import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { GoldGlow } from "../components/GoldGlow";
import { Badge } from "../components/Badge";
import { theme, fonts } from "../theme";

const deliverables = [
  "Client-Ready Website",
  "AI Marketing Engine",
  "Automation Workflows",
  "Outreach Playbook",
  "System Dashboard",
  "Full Documentation",
];

const DeliverableCard: React.FC<{ title: string; index: number }> = ({
  title,
  index,
}) => {
  const frame = useCurrentFrame();
  const delay = 180 + index * 12;

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [delay, delay + 15], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 20px",
        borderRadius: 12,
        background: theme.card,
        border: `1px solid ${theme.border}`,
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          background: theme.accent,
          flexShrink: 0,
        }}
      />
      <span
        style={{
          fontSize: 16,
          fontWeight: 600,
          color: theme.fg,
          fontFamily: fonts.sans,
        }}
      >
        {title}
      </span>
    </div>
  );
};

export const S3_Solution: React.FC = () => {
  const frame = useCurrentFrame();

  const logoOpacity = interpolate(frame, [60, 90], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const logoScale = interpolate(frame, [60, 90], [0.8, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GoldGlow startFrame={30} size={500} />

      <Badge text="The Solution" startFrame={0} />

      <div style={{ height: 30 }} />

      {/* Logo */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          fontSize: 56,
          fontWeight: 800,
          fontFamily: fonts.sans,
          letterSpacing: "-0.03em",
        }}
      >
        <span style={{ color: theme.fg }}>Client</span>
        <span style={{ color: theme.accent }}>Flow</span>
      </div>

      <AnimatedText
        text="Your complete client acquisition system."
        startFrame={120}
        fontSize={22}
        color={theme.muted}
        fontWeight={500}
      />

      <div style={{ height: 30 }} />

      {/* Deliverables grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 10,
          width: 520,
        }}
      >
        {deliverables.map((d, i) => (
          <DeliverableCard key={d} title={d} index={i} />
        ))}
      </div>
    </AbsoluteFill>
  );
};
