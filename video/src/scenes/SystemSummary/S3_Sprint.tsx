import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { theme, fonts } from "../../theme";

const SprintStep: React.FC<{
  phase: string;
  command: string;
  description: string;
  startFrame: number;
}> = ({ phase, command, description, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [startFrame, startFrame + 15], [20, 0], {
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
        gap: 20,
        width: 900,
      }}
    >
      <div
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: theme.accent,
          fontFamily: fonts.mono,
          minWidth: 90,
          textTransform: "uppercase" as const,
          letterSpacing: "0.1em",
        }}
      >
        {phase}
      </div>
      <div
        style={{
          fontSize: 13,
          color: theme.accent,
          fontFamily: fonts.mono,
          background: `${theme.accent}15`,
          border: `1px solid ${theme.accent}30`,
          padding: "6px 14px",
          borderRadius: 8,
          minWidth: 180,
        }}
      >
        {command}
      </div>
      <div
        style={{
          fontSize: 18,
          color: theme.muted,
          fontFamily: fonts.sans,
          fontWeight: 400,
        }}
      >
        {description}
      </div>
    </div>
  );
};

export const S3_Sprint: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
      }}
    >
      <Badge text="THE SPRINT" startFrame={5} />

      <AnimatedText
        text="Think > Plan > Build > Review > Test > Ship"
        startFrame={15}
        fontSize={38}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 8 }} />

      <SprintStep phase="Think" command="/office-hours" description="6 forcing questions before code" startFrame={50} />
      <SprintStep phase="Plan" command="/autoplan" description="CEO + design + eng review in one command" startFrame={65} />
      <SprintStep phase="Build" command="subagent-dev" description="Fresh agent per task, TDD enforced" startFrame={80} />
      <SprintStep phase="Review" command="/review + /cso" description="Staff eng review + security audit" startFrame={95} />
      <SprintStep phase="Test" command="/qa" description="Real browser. Real clicks. Real bugs found." startFrame={110} />
      <SprintStep phase="Ship" command="/ship" description="Tests, changelog, PR — one command" startFrame={125} />
      <SprintStep phase="Reflect" command="/retro" description="Weekly retro. Knowledge compounds." startFrame={140} />
    </AbsoluteFill>
  );
};
