import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { theme, fonts } from "../theme";

const testimonials = [
  {
    quote: "First discovery call booked within 10 days of launch.",
    who: "Sarah M.",
    role: "Freelance Designer",
    metric: "First lead in 10 days",
  },
  {
    quote: "Replaced $2k/month in ad spend that wasn't converting.",
    who: "James K.",
    role: "Marketing Consultant",
    metric: "Saved $2k/mo",
  },
  {
    quote: "Closed a $4,500 deal in my first week.",
    who: "Ana R.",
    role: "Agency Founder",
    metric: "$4.5k closed",
  },
];

const TestimonialCard: React.FC<{
  t: (typeof testimonials)[0];
  index: number;
}> = ({ t, index }) => {
  const frame = useCurrentFrame();
  const delay = 30 + index * 25;

  const opacity = interpolate(frame, [delay, delay + 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const x = interpolate(frame, [delay, delay + 20], [-30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${x}px)`,
        width: 700,
        padding: "24px 32px",
        borderRadius: 16,
        background: theme.card,
        border: `1px solid ${theme.border}`,
        borderLeft: `3px solid ${theme.accent}`,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        marginBottom: 12,
      }}
    >
      <div
        style={{
          fontSize: 17,
          color: theme.fg,
          fontFamily: fonts.sans,
          fontWeight: 500,
          lineHeight: 1.5,
          fontStyle: "italic",
        }}
      >
        &ldquo;{t.quote}&rdquo;
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <span style={{ fontSize: 14, fontWeight: 600, color: theme.fg, fontFamily: fonts.sans }}>
            {t.who}
          </span>
          <span style={{ fontSize: 13, color: theme.mutedDim, marginLeft: 8, fontFamily: fonts.sans }}>
            {t.role}
          </span>
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: theme.accent,
            background: `${theme.accent}12`,
            padding: "4px 12px",
            borderRadius: 999,
            fontFamily: fonts.sans,
          }}
        >
          {t.metric}
        </div>
      </div>
    </div>
  );
};

export const S6_Proof: React.FC = () => {
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
        text="Real results from real clients."
        startFrame={0}
        fontSize={32}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 36 }} />

      {testimonials.map((t, i) => (
        <TestimonialCard key={t.who} t={t} index={i} />
      ))}
    </AbsoluteFill>
  );
};
