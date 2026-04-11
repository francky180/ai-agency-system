import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { GoldGlow } from "../../components/GoldGlow";
import { theme, fonts } from "../../theme";

const RoleChip: React.FC<{
  role: string;
  command: string;
  startFrame: number;
}> = ({ role, command, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [startFrame, startFrame + 12], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        padding: "16px 20px",
        borderRadius: 12,
        border: `1px solid ${theme.border}`,
        background: theme.card,
        minWidth: 150,
      }}
    >
      <div
        style={{
          fontSize: 15,
          fontWeight: 700,
          color: theme.fg,
          fontFamily: fonts.sans,
        }}
      >
        {role}
      </div>
      <div
        style={{
          fontSize: 12,
          color: theme.accent,
          fontFamily: fonts.mono,
        }}
      >
        {command}
      </div>
    </div>
  );
};

export const S4_Specialists: React.FC = () => {
  const roles = [
    { role: "CEO", command: "/plan-ceo-review" },
    { role: "Eng Manager", command: "/plan-eng-review" },
    { role: "Designer", command: "/design-review" },
    { role: "Staff Engineer", command: "/review" },
    { role: "QA Lead", command: "/qa" },
    { role: "Security Officer", command: "/cso" },
    { role: "Release Eng", command: "/ship" },
    { role: "SRE", command: "/canary" },
    { role: "Debugger", command: "/investigate" },
    { role: "Tech Writer", command: "/document-release" },
    { role: "Perf Engineer", command: "/benchmark" },
    { role: "DX Lead", command: "/devex-review" },
  ];

  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
      }}
    >
      <GoldGlow startFrame={0} size={700} />

      <Badge text="YOUR TEAM" startFrame={5} />

      <AnimatedText
        text="23+ Specialist Roles"
        startFrame={15}
        fontSize={48}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 4 }} />

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 12,
          maxWidth: 1000,
        }}
      >
        {roles.map((r, i) => (
          <RoleChip
            key={r.command}
            role={r.role}
            command={r.command}
            startFrame={40 + i * 8}
          />
        ))}
      </div>
    </AbsoluteFill>
  );
};
