import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { GoldGlow } from "../../components/GoldGlow";
import { Badge } from "../../components/Badge";
import { theme } from "../../theme";

export const S1_Title: React.FC = () => {
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
      <GoldGlow startFrame={0} size={600} />

      <Badge text="AI SOFTWARE FACTORY" startFrame={10} />

      <AnimatedText
        text="102+ Skills. One Person."
        startFrame={30}
        fontSize={64}
        color={theme.fg}
        fontWeight={700}
      />

      <AnimatedText
        text="A Complete Virtual Engineering Team"
        startFrame={60}
        fontSize={36}
        color={theme.muted}
        fontWeight={500}
      />

      <AnimatedText
        text="Powered by Claude Code"
        startFrame={90}
        fontSize={28}
        color={theme.accent}
        fontWeight={600}
      />
    </AbsoluteFill>
  );
};
