import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { GoldGlow } from "../components/GoldGlow";
import { theme, fonts } from "../theme";

export const S7_CTA: React.FC = () => {
  const frame = useCurrentFrame();

  const buttonOpacity = interpolate(frame, [80, 100], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const buttonScale = interpolate(frame, [80, 100], [0.9, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const urlOpacity = interpolate(frame, [110, 130], [0, 0.6], {
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
      <GoldGlow startFrame={0} size={600} />

      <AnimatedText
        text="Stop chasing clients."
        startFrame={10}
        fontSize={56}
        color={theme.fg}
        fontWeight={800}
      />

      <div style={{ height: 8 }} />

      <AnimatedText
        text="Start closing them."
        startFrame={40}
        fontSize={56}
        color={theme.accent}
        fontWeight={800}
      />

      <div style={{ height: 40 }} />

      {/* CTA Button */}
      <div
        style={{
          opacity: buttonOpacity,
          transform: `scale(${buttonScale})`,
          background: theme.accent,
          color: theme.bg,
          fontSize: 18,
          fontWeight: 700,
          padding: "16px 48px",
          borderRadius: 999,
          fontFamily: fonts.sans,
          letterSpacing: "0.02em",
          boxShadow: `0 0 40px ${theme.accent}40`,
        }}
      >
        Launch My System →
      </div>

      <div style={{ height: 20 }} />

      <div
        style={{
          opacity: urlOpacity,
          fontSize: 14,
          color: theme.mutedDim,
          fontFamily: fonts.mono,
          letterSpacing: "0.05em",
        }}
      >
        clientflow.com
      </div>
    </AbsoluteFill>
  );
};
