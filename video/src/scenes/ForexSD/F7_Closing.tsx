import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { GoldGlow } from "../../components/GoldGlow";
import { Badge } from "../../components/Badge";
import { theme } from "../../theme";

export const F7_Closing: React.FC = () => {
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
      <GoldGlow startFrame={0} size={700} />

      <Badge text="PHIMINDFLOW" startFrame={10} />

      <AnimatedText
        text="Supply & Demand"
        startFrame={30}
        fontSize={56}
        color={theme.fg}
        fontWeight={700}
      />

      <AnimatedText
        text="Trade where the institutions trade."
        startFrame={60}
        fontSize={32}
        color={theme.accent}
        fontWeight={600}
      />

      <div style={{ height: 10 }} />

      <AnimatedText
        text="Mark the zone. Set the order. Manage the risk."
        startFrame={95}
        fontSize={26}
        color={theme.muted}
        fontWeight={500}
      />

      <AnimatedText
        text="That's it. No indicators. No noise. Just price."
        startFrame={125}
        fontSize={26}
        color={theme.muted}
        fontWeight={500}
      />

      <div style={{ height: 10 }} />

      <AnimatedText
        text="Follow for more."
        startFrame={160}
        fontSize={36}
        color={theme.fg}
        fontWeight={700}
      />
    </AbsoluteFill>
  );
};
