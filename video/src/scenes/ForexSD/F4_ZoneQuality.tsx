import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../../components/AnimatedText";
import { Badge } from "../../components/Badge";
import { theme, fonts } from "../../theme";

const QualityRow: React.FC<{
  factor: string;
  strong: string;
  weak: string;
  startFrame: number;
}> = ({ factor, strong, weak, startFrame }) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [startFrame, startFrame + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        display: "flex",
        alignItems: "center",
        width: 900,
        padding: "12px 0",
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <div style={{ flex: 1, fontSize: 20, color: theme.fg, fontFamily: fonts.sans, fontWeight: 600 }}>
        {factor}
      </div>
      <div style={{ width: 280, fontSize: 18, color: "#22c55e", fontFamily: fonts.sans, textAlign: "center" }}>
        {strong}
      </div>
      <div style={{ width: 280, fontSize: 18, color: "#ef4444", fontFamily: fonts.sans, textAlign: "center" }}>
        {weak}
      </div>
    </div>
  );
};

export const F4_ZoneQuality: React.FC = () => {
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
      <Badge text="ZONE QUALITY" startFrame={5} />

      <AnimatedText
        text="Not All Zones Are Equal"
        startFrame={15}
        fontSize={44}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 8 }} />

      {/* Header */}
      <div style={{ display: "flex", width: 900, paddingBottom: 8, borderBottom: `1px solid ${theme.accent}40` }}>
        <div style={{ flex: 1, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Factor</div>
        <div style={{ width: 280, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textAlign: "center", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Strong Zone</div>
        <div style={{ width: 280, fontSize: 13, color: theme.mutedDim, fontFamily: fonts.mono, textAlign: "center", textTransform: "uppercase" as const, letterSpacing: "0.1em" }}>Weak Zone</div>
      </div>

      <QualityRow factor="Departure Speed" strong="Explosive, fast candles" weak="Slow, grinding move" startFrame={45} />
      <QualityRow factor="Time at Zone" strong="Little time (1-3 candles)" weak="Long consolidation" startFrame={60} />
      <QualityRow factor="Freshness" strong="Never been tested" weak="Tested 2-3 times already" startFrame={75} />
      <QualityRow factor="Move Distance" strong="Broke through structure" weak="Weak push, no break" startFrame={90} />
      <QualityRow factor="Trend Alignment" strong="With the higher timeframe" weak="Against the trend" startFrame={105} />

      <AnimatedText
        text="Fresh zones with explosive departures = highest probability."
        startFrame={130}
        fontSize={20}
        color={theme.accent}
        fontWeight={500}
      />
    </AbsoluteFill>
  );
};
