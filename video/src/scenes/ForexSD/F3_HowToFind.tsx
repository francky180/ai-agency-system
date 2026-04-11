import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { GoldGlow } from "../../components/GoldGlow";
import { theme, fonts } from "../../theme";

const Step: React.FC<{
  number: string;
  title: string;
  detail: string;
  startFrame: number;
}> = ({ number, title, detail, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = interpolate(frame, [startFrame, startFrame + 18], [-50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        display: "flex",
        alignItems: "flex-start",
        gap: 20,
        width: 800,
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 800,
          color: theme.accent,
          fontFamily: fonts.mono,
          minWidth: 50,
        }}
      >
        {number}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: theme.fg, fontFamily: fonts.sans }}>
          {title}
        </div>
        <div style={{ fontSize: 18, color: theme.muted, fontFamily: fonts.sans, fontWeight: 400 }}>
          {detail}
        </div>
      </div>
    </div>
  );
};

export const F3_HowToFind: React.FC = () => {
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
      <GoldGlow startFrame={0} size={500} />

      <Badge text="IDENTIFY ZONES" startFrame={5} />

      <AnimatedText
        text="How To Find Supply & Demand Zones"
        startFrame={15}
        fontSize={42}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 8 }} />

      <Step number="01" title="Find the explosive move" detail="Look for strong, fast candles that broke structure. That's institutional money." startFrame={45} />
      <Step number="02" title="Mark the base before the move" detail="The consolidation or last candle before the explosion. That's your zone." startFrame={70} />
      <Step number="03" title="Draw the zone" detail="Mark the high and low of the base candle(s). Extend it to the right." startFrame={95} />
      <Step number="04" title="Wait for price to return" detail="Don't chase. Let price come back to your zone. Patience is the edge." startFrame={120} />
    </AbsoluteFill>
  );
};
