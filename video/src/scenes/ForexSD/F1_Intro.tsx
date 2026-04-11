import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { GoldGlow } from "../../components/GoldGlow";
import { Badge } from "../../components/Badge";
import { theme } from "../../theme";

export const F1_Intro: React.FC = () => {
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

      <Badge text="FOREX EDUCATION" startFrame={10} />

      <AnimatedText
        text="Supply & Demand"
        startFrame={30}
        fontSize={72}
        color={theme.fg}
        fontWeight={700}
      />

      <AnimatedText
        text="The Only Strategy You Need"
        startFrame={60}
        fontSize={36}
        color={theme.accent}
        fontWeight={600}
      />

      <AnimatedText
        text="Stop chasing indicators. Trade where the banks trade."
        startFrame={100}
        fontSize={24}
        color={theme.muted}
        fontWeight={400}
      />
    </AbsoluteFill>
  );
};
