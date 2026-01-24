import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "eCrow | Digital Innovation Company",
  description: "eCrow Ltd. develops and operates web-based software products, including SaaS applications and browser-based digital games. Building the future of digital experiences.",
  keywords: ["SaaS", "software", "digital games", "web applications", "eCrow"],
  authors: [{ name: "eCrow Ltd." }],
  openGraph: {
    title: "eCrow | Digital Innovation Company",
    description: "Building the future of digital experiences through innovative SaaS solutions and engaging browser-based games.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
