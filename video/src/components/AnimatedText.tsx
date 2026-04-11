import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { theme, fonts } from "../theme";

interface AnimatedTextProps {
  text: string;
  startFrame: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  maxWidth?: number;
  lineHeight?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  startFrame,
  fontSize = 48,
  color = theme.fg,
  fontWeight = 700,
  maxWidth = 900,
  lineHeight = 1.15,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [startFrame, startFrame + 20], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        fontSize,
        fontWeight,
        color,
        fontFamily: fonts.sans,
        textAlign: "center",
        maxWidth,
        lineHeight,
        letterSpacing: "-0.02em",
      }}
    >
      {text}
    </div>
  );
};
