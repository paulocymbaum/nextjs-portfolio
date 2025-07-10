import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paulo Cymbaum - AI Engineer & Founder",
  description: "Portfolio of Paulo Cymbaum, an AI Engineer specializing in LLMs, RAG architectures, and intelligent automation. Founder of Yapper AI EdTech platform with 10+ years of experience in AI-driven solutions.",
  keywords: ["AI Engineer", "LLM", "RAG", "AI automation", "machine learning", "EdTech", "AI agents", "prompt engineering", "Python", "TypeScript"],
  authors: [{ name: "Paulo Cymbaum" }],
  creator: "Paulo Cymbaum",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          defaultTheme="system"
          storageKey="portfolio-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
