import type { Metadata } from "next";
import { Inter, Archivo, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sakash Srivastava · Machine Learning & AI Engineer",
  description:
    "Portfolio of Sakash Srivastava, a Machine Learning and AI engineer who ships agentic LLM systems, retrieval pipelines, and computer vision, with research at King's College London.",
  keywords: [
    "Sakash Srivastava",
    "Machine Learning Engineer",
    "AI Engineer",
    "Agentic AI",
    "RAG",
    "LLM",
    "Computer Vision",
    "Portfolio",
    "LNMIIT",
  ],
  authors: [{ name: "Sakash Srivastava" }],
  openGraph: {
    title: "Sakash Srivastava · Machine Learning & AI Engineer",
    description:
      "I build agentic AI systems that actually ship. Two LLM systems shipped solo, one live in production, plus CV and medical imaging research.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
