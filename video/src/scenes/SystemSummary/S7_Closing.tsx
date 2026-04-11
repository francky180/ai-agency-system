import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { GoldGlow } from "../../components/GoldGlow";
import { Badge } from "../../components/Badge";
import { theme } from "../../theme";

export const S7_Closing: React.FC = () => {
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

      <Badge text="THE SYSTEM" startFrame={10} />

      <AnimatedText
        text="One Person. Three Businesses."
        startFrame={30}
        fontSize={52}
        color={theme.fg}
        fontWeight={700}
      />

      <AnimatedText
        text="102+ Skills. Zero Shortcuts."
        startFrame={60}
        fontSize={44}
        color={theme.accent}
        fontWeight={700}
      />

      <div style={{ height: 10 }} />

      <AnimatedText
        text="This is not AI helping you code."
        startFrame={100}
        fontSize={30}
        color={theme.muted}
        fontWeight={500}
      />

      <AnimatedText
        text="This is a virtual engineering organization"
        startFrame={130}
        fontSize={30}
        color={theme.muted}
        fontWeight={500}
      />

      <AnimatedText
        text="operated by one builder."
        startFrame={155}
        fontSize={34}
        color={theme.fg}
        fontWeight={600}
      />
    </AbsoluteFill>
  );
};
