import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { theme, fonts } from "../theme";

const steps = [
  { num: "01", title: "We Deploy", metric: "Day 1", label: "system live" },
  { num: "02", title: "Leads Come In", metric: "7–14 days", label: "first leads" },
  { num: "03", title: "You Close", metric: "Ongoing", label: "growth" },
];

const StepCard: React.FC<{
  step: (typeof steps)[0];
  index: number;
}> = ({ step, index }) => {
  const frame = useCurrentFrame();
  const delay = 60 + index * 30;

  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const y = interpolate(frame, [delay, delay + 20], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Glow effect that activates sequentially
  const glowDelay = delay + 60;
  const glowOpacity = interpolate(
    frame,
    [glowDelay, glowDelay + 15, glowDelay + 45, glowDelay + 60],
    [0, 1, 1, 0.3],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        opacity,
        transform: `translateY(${y}px)`,
        width: 280,
        padding: 28,
        borderRadius: 20,
        background: theme.card,
        border: `1px solid ${theme.border}`,
        boxShadow: `0 0 40px ${theme.accent}${Math.round(glowOpacity * 20)
          .toString(16)
          .padStart(2, "0")}`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            background: `${theme.accent}18`,
            border: `1px solid ${theme.accent}33`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 700,
            color: theme.accent,
            fontFamily: fonts.mono,
          }}
        >
          {step.num}
        </div>
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: theme.accent,
              fontFamily: fonts.sans,
              lineHeight: 1,
            }}
          >
            {step.metric}
          </div>
          <div style={{ fontSize: 11, color: theme.mutedDim, marginTop: 2, fontFamily: fonts.sans }}>
            {step.label}
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: theme.fg,
          fontFamily: fonts.sans,
        }}
      >
        {step.title}
      </div>
    </div>
  );
};

export const S4_Process: React.FC = () => {
  const frame = useCurrentFrame();

  // Connecting line
  const lineWidth = interpolate(frame, [90, 180], [0, 100], {
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
        text="From zero to clients in three steps."
        startFrame={0}
        fontSize={36}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 50 }} />

      <div style={{ position: "relative" }}>
        {/* Connecting line */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 140,
            right: 140,
            height: 1,
            background: `linear-gradient(90deg, ${theme.border}, ${theme.accent}33, ${theme.border})`,
            width: `${lineWidth}%`,
          }}
        />

        <div style={{ display: "flex", gap: 20, position: "relative" }}>
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
