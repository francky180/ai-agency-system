import React from "react";
import { AbsoluteFill } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { GoldGlow } from "../components/GoldGlow";
import { theme } from "../theme";

export const S1_Problem: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <GoldGlow startFrame={0} size={500} />

      <AnimatedText
        text="You're great at what you do."
        startFrame={15}
        fontSize={42}
        color={theme.muted}
        fontWeight={500}
      />

      <AnimatedText
        text="But finding clients?"
        startFrame={60}
        fontSize={42}
        color={theme.muted}
        fontWeight={500}
      />

      <div style={{ height: 10 }} />

      <AnimatedText
        text="That's a full-time job you didn't sign up for."
        startFrame={120}
        fontSize={52}
        color={theme.accent}
        fontWeight={700}
      />
    </AbsoluteFill>
  );
};
