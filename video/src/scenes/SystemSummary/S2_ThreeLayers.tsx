import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { theme, fonts } from "../../theme";

const LayerCard: React.FC<{
  title: string;
  subtitle: string;
  count: string;
  startFrame: number;
  index: number;
}> = ({ title, subtitle, count, startFrame, index }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = interpolate(frame, [startFrame, startFrame + 20], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        display: "flex",
        alignItems: "center",
        gap: 30,
        padding: "28px 36px",
        borderRadius: 16,
        border: `1px solid ${theme.border}`,
        background: theme.card,
        width: 750,
      }}
    >
      <div
        style={{
          fontSize: 40,
          fontWeight: 800,
          color: theme.accent,
          fontFamily: fonts.mono,
          minWidth: 90,
          textAlign: "center",
        }}
      >
        {count}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: theme.fg,
            fontFamily: fonts.sans,
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 18,
            color: theme.muted,
            fontFamily: fonts.sans,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export const S2_ThreeLayers: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
      }}
    >
      <Badge text="THREE LAYERS" startFrame={5} />

      <AnimatedText
        text="The Architecture"
        startFrame={15}
        fontSize={48}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 10 }} />

      <LayerCard
        title="Superpowers"
        subtitle="Process Discipline — TDD, Design-First, Review Gates"
        count="14"
        startFrame={45}
        index={0}
      />

      <LayerCard
        title="gstack"
        subtitle="Virtual Team — 23+ Specialists, Browser, Security, Deploy"
        count="35+"
        startFrame={65}
        index={1}
      />

      <LayerCard
        title="Marketing Suite"
        subtitle="Campaigns, Content, Outreach, ROI, Compliance"
        count="49"
        startFrame={85}
        index={2}
      />
    </AbsoluteFill>
  );
};
