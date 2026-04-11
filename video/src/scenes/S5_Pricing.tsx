import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { AnimatedText } from "../components/AnimatedText";
import { theme, fonts } from "../theme";

const Checkmark: React.FC<{ gold?: boolean }> = ({ gold = true }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 24 24"
    fill="none"
    stroke={gold ? theme.accent : theme.mutedDim}
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const features = [
  "Production-ready website",
  "AI marketing engine",
  "Automation workflows",
  "Outreach playbook",
  "System dashboard",
  "Full documentation",
];

const premiumExtras = [
  "Custom branding",
  "Deployed campaigns",
  "Priority support",
  "Revenue playbook",
  "Full deployment",
];

const PricingCard: React.FC<{
  tier: string;
  price: string;
  subtitle: string;
  items: string[];
  extras?: string[];
  highlighted?: boolean;
  startFrame: number;
}> = ({ tier, price, subtitle, items, extras, highlighted, startFrame }) => {
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
        width: 360,
        padding: 36,
        borderRadius: 20,
        background: theme.card,
        border: `1px solid ${highlighted ? `${theme.accent}40` : theme.border}`,
        boxShadow: highlighted ? `0 0 60px ${theme.accent}10` : "none",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {highlighted && (
        <div
          style={{
            position: "absolute",
            top: -14,
            left: 28,
            background: theme.accent,
            color: theme.bg,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase" as const,
            padding: "6px 16px",
            borderRadius: 999,
            fontFamily: fonts.sans,
          }}
        >
          Most Popular
        </div>
      )}

      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: "0.15em",
          textTransform: "uppercase" as const,
          color: highlighted ? theme.accent : theme.mutedDim,
          marginBottom: 20,
          marginTop: highlighted ? 8 : 0,
          fontFamily: fonts.sans,
        }}
      >
        {tier}
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 4 }}>
        <span
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: highlighted ? theme.accent : theme.fg,
            fontFamily: fonts.sans,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          {price}
        </span>
        <span style={{ fontSize: 14, color: theme.mutedDim, paddingBottom: 4, fontFamily: fonts.sans }}>
          one-time
        </span>
      </div>

      <div style={{ fontSize: 13, color: theme.mutedDim, marginBottom: 24, fontFamily: fonts.sans }}>
        {subtitle}
      </div>

      <div style={{ height: 1, background: theme.border, marginBottom: 20 }} />

      {items.map((item, i) => {
        const itemDelay = startFrame + 30 + i * 6;
        const itemOpacity = interpolate(frame, [itemDelay, itemDelay + 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        });

        return (
          <div
            key={item}
            style={{
              opacity: itemOpacity,
              display: "flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 12,
              fontSize: 14,
              fontWeight: 500,
              color: theme.fg,
              fontFamily: fonts.sans,
            }}
          >
            <Checkmark />
            {item}
          </div>
        );
      })}

      {extras && (
        <>
          <div style={{ height: 1, background: highlighted ? `${theme.accent}18` : theme.border, margin: "12px 0 16px" }} />
          {extras.map((item, i) => {
            const extraDelay = startFrame + 70 + i * 6;
            const extraOpacity = interpolate(frame, [extraDelay, extraDelay + 10], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            });

            return (
              <div
                key={item}
                style={{
                  opacity: extraOpacity,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 12,
                  fontSize: 14,
                  fontWeight: 500,
                  color: highlighted ? theme.fg : theme.mutedDim,
                  fontFamily: fonts.sans,
                }}
              >
                {highlighted ? <Checkmark /> : <span style={{ width: 16, textAlign: "center", color: theme.mutedDim }}>—</span>}
                {item}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export const S5_Pricing: React.FC = () => {
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
        text="One system. Two ways to start."
        startFrame={0}
        fontSize={36}
        color={theme.fg}
        fontWeight={700}
      />

      <div style={{ height: 40 }} />

      <div style={{ display: "flex", gap: 24 }}>
        <PricingCard
          tier="Core System"
          price="$250"
          subtitle="You launch it. Full system, full docs."
          items={features}
          extras={premiumExtras}
          startFrame={20}
        />
        <PricingCard
          tier="Done-For-You"
          price="$1,500"
          subtitle="We launch it with you. Custom + hands-on."
          items={features}
          extras={premiumExtras}
          highlighted
          startFrame={35}
        />
      </div>
    </AbsoluteFill>
  );
};
