import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { theme, fonts } from "../../theme";

const Rule: React.FC<{
  text: string;
  startFrame: number;
}> = ({ text, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = interpolate(frame, [startFrame, startFrame + 15], [-40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        display: "flex",
        alignItems: "center",
        gap: 16,
        fontSize: 26,
        color: theme.fg,
        fontFamily: fonts.sans,
        fontWeight: 600,
      }}
    >
      <div style={{ color: theme.accent, fontSize: 20, fontFamily: fonts.mono }}>
        //
      </div>
      {text}
    </div>
  );
};

export const S5_HardRules: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 22,
      }}
    >
      <Badge text="HARD RULES" startFrame={5} />

      <AnimatedText
        text="Quality Gates That Never Skip"
        startFrame={15}
        fontSize={44}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 8 }} />

      <Rule text="No code without a design. Ever." startFrame={45} />
      <Rule text="No production code without a failing test." startFrame={65} />
      <Rule text="No merge without review. Both stages." startFrame={85} />
      <Rule text="No done without verification. Prove it." startFrame={105} />
      <Rule text="No fixing without investigation first." startFrame={125} />
    </AbsoluteFill>
  );
};
