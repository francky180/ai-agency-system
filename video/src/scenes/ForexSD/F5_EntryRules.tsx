import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { GoldGlow } from "../../components/GoldGlow";
import { theme, fonts } from "../../theme";

const Rule: React.FC<{
  icon: string;
  text: string;
  startFrame: number;
}> = ({ icon, text, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [startFrame, startFrame + 15], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `scale(${scale})`,
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "18px 28px",
        borderRadius: 12,
        border: `1px solid ${theme.border}`,
        background: theme.card,
        width: 750,
      }}
    >
      <div style={{ fontSize: 28 }}>{icon}</div>
      <div style={{ fontSize: 22, color: theme.fg, fontFamily: fonts.sans, fontWeight: 600 }}>
        {text}
      </div>
    </div>
  );
};

export const F5_EntryRules: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
      }}
    >
      <GoldGlow startFrame={0} size={500} />

      <Badge text="EXECUTION" startFrame={5} />

      <AnimatedText
        text="How To Trade The Zone"
        startFrame={15}
        fontSize={44}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 6 }} />

      <Rule icon="1." text="Set limit order at the zone edge" startFrame={45} />
      <Rule icon="2." text="Stop loss just beyond the zone" startFrame={65} />
      <Rule icon="3." text="Target the opposite zone (minimum 1:3 RR)" startFrame={85} />
      <Rule icon="4." text="Risk 1-2% of your account per trade" startFrame={105} />
      <Rule icon="5." text="If zone breaks, it's invalidated. Move on." startFrame={125} />

      <div style={{ height: 6 }} />

      <AnimatedText
        text="No confirmation needed. The zone IS the confirmation."
        startFrame={150}
        fontSize={20}
        color={theme.accent}
        fontWeight={500}
      />
    </AbsoluteFill>
  );
};
