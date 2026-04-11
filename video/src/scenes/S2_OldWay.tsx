import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { theme, fonts } from "../theme";
import { AnimatedText } from "../components/AnimatedText";

const costs = [
  { item: "Agency website", cost: "$3,000–5,000" },
  { item: "Marketing strategy", cost: "$2,000+/mo" },
  { item: "SEO & content", cost: "$1,500+/mo" },
  { item: "Automation setup", cost: "$3,000–5,000" },
  { item: "Outreach sequences", cost: "$1,000+/mo" },
];

const CostRow: React.FC<{ item: string; cost: string; index: number }> = ({
  item,
  cost,
  index,
}) => {
  const frame = useCurrentFrame();
  const delay = 20 + index * 18;

  const opacity = interpolate(frame, [delay, delay + 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = interpolate(frame, [delay, delay + 15], [60, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const strikethrough = interpolate(frame, [delay + 30, delay + 45], [0, 100], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 32px",
        borderRadius: 12,
        background: theme.card,
        border: `1px solid ${theme.border}`,
        marginBottom: 8,
        width: 600,
      }}
    >
      <span
        style={{
          fontSize: 18,
          fontWeight: 500,
          color: theme.fg,
          fontFamily: fonts.sans,
        }}
      >
        {item}
      </span>
      <span
        style={{
          fontSize: 18,
          fontWeight: 600,
          color: theme.mutedDim,
          fontFamily: fonts.mono,
          position: "relative",
        }}
      >
        {cost}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            height: 2,
            width: `${strikethrough}%`,
            background: "#ef4444",
            opacity: 0.7,
          }}
        />
      </span>
    </div>
  );
};

export const S2_OldWay: React.FC = () => {
  const frame = useCurrentFrame();

  const totalOpacity = interpolate(frame, [280, 310], [0, 1], {
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
      <AnimatedText
        text="The traditional way costs a fortune."
        startFrame={0}
        fontSize={28}
        color={theme.mutedDim}
        fontWeight={500}
      />

      <div style={{ height: 30 }} />

      {costs.map((c, i) => (
        <CostRow key={c.item} item={c.item} cost={c.cost} index={i} />
      ))}

      <div style={{ height: 20 }} />

      <div
        style={{
          opacity: totalOpacity,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "20px 32px",
          borderRadius: 16,
          border: `1px solid ${theme.accent}33`,
          background: `${theme.accent}08`,
          width: 600,
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: theme.fg,
            fontFamily: fonts.sans,
          }}
        >
          Total
        </span>
        <span
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#ef4444",
            fontFamily: fonts.mono,
          }}
        >
          $11,000–$20,000+
        </span>
      </div>
    </AbsoluteFill>
  );
};
