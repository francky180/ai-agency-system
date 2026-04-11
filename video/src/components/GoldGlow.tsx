import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme } from "../theme";

interface GoldGlowProps {
  startFrame: number;
  size?: number;
}

export const GoldGlow: React.FC<GoldGlowProps> = ({
  startFrame,
  size = 400,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 30], [0, 0.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [startFrame, startFrame + 60], [0.8, 1.1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${theme.accent}40 0%, transparent 70%)`,
        opacity,
        transform: `scale(${scale})`,
        filter: "blur(80px)",
        pointerEvents: "none",
      }}
    />
  );
};
