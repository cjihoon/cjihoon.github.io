import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeInit from "@/components/ThemeInit";

const crimsonText = Crimson_Text({
  variable: "--font-crimson-text",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Jihoon Choi | Public Policy PhD Student",
  description:
    "Jihoon Choi is a Public Policy PhD student at George Mason University researching energy transition and applied microeconomics.",
  openGraph: {
    title: "Jihoon Choi | Public Policy PhD Student",
    description:
      "PhD student at George Mason University's Schar School of Policy and Government. Research in energy transition and applied microeconomics.",
    url: "https://cjihoon.github.io",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonText.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <ThemeInit />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
