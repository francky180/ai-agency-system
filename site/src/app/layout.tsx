import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClientFlow — Done-For-You Client Acquisition System",
  description:
    "We build your entire client acquisition system — website, marketing engine, automation, and strategy. One payment, lifetime access. Start getting clients in 7–14 days.",
  openGraph: {
    title: "ClientFlow — Done-For-You Client Acquisition System",
    description:
      "Website. Marketing engine. Automation. Outreach playbook. All built and deployed for you. One payment, lifetime access.",
    type: "website",
    locale: "en_US",
    siteName: "ClientFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClientFlow — Done-For-You Client Acquisition System",
    description:
      "We build your entire client acquisition system. Website, marketing engine, automation, outreach. One payment, lifetime access.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
