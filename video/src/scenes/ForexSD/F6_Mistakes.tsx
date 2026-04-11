import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { theme, fonts } from "../../theme";

const Mistake: React.FC<{
  mistake: string;
  fix: string;
  startFrame: number;
}> = ({ mistake, fix, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = interpolate(frame, [startFrame, startFrame + 18], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        display: "flex",
        gap: 24,
        width: 850,
        padding: "16px 0",
      }}
    >
      <div style={{ flex: 1, fontSize: 20, color: "#ef4444", fontFamily: fonts.sans, fontWeight: 600, textDecoration: "line-through", textDecorationColor: "#ef444480" }}>
        {mistake}
      </div>
      <div style={{ flex: 1, fontSize: 20, color: "#22c55e", fontFamily: fonts.sans, fontWeight: 600 }}>
        {fix}
      </div>
    </div>
  );
};

export const F6_Mistakes: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
      }}
    >
      <Badge text="AVOID THESE" startFrame={5} />

      <AnimatedText
        text="Common Mistakes"
        startFrame={15}
        fontSize={44}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 8 }} />

      <div style={{ display: "flex", width: 850, paddingBottom: 8, borderBottom: `1px solid ${theme.accent}40` }}>
        <div style={{ flex: 1, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Mistake</div>
        <div style={{ flex: 1, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Fix</div>
      </div>

      <Mistake mistake="Trading zones that have been tested 3+ times" fix="Only trade fresh, untested zones" startFrame={45} />
      <Mistake mistake="Drawing zones on 1-minute charts" fix="Use H4 and Daily for zone marking" startFrame={65} />
      <Mistake mistake="Entering before price reaches the zone" fix="Wait for price to tap the zone. Patience." startFrame={85} />
      <Mistake mistake="No stop loss, hoping it comes back" fix="Stop beyond the zone. Always. No exceptions." startFrame={105} />
      <Mistake mistake="Risking 10% on one trade" fix="1-2% max. You need to survive 10 losses." startFrame={125} />
    </AbsoluteFill>
  );
};
