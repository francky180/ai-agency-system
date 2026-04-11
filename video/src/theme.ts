export const theme = {
  bg: "#09090b",
  bgLight: "#111113",
  fg: "#fafafa",
  accent: "#c9a84c",
  accentLight: "#d4b85e",
  muted: "#a1a1aa",
  mutedDim: "#71717a",
  card: "#111113",
  border: "#1f1f23",
  borderLight: "#27272a",
} as const;

export const fonts = {
  sans: 'system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
  mono: '"SF Mono", "Cascadia Code", "Consolas", monospace',
} as const;

export const FPS = 30;
export const DURATION_FRAMES = 2940; // ~98 seconds
