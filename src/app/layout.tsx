import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SAFORS — Precision Auto Parts for the Global Aftermarket",
    template: "%s | SAFORS Automotive Technology",
  },
  description:
    "SAFORS delivers engineered automotive components from China's most advanced manufacturing corridor to independent garages, distributors, and fleet operators worldwide. ISO 9001 & IATF 16949 certified.",
  keywords: [
    "automotive parts",
    "auto parts supplier",
    "OEM replacement parts",
    "chassis parts",
    "cooling system",
    "aftermarket auto parts",
    "SAFORS",
    "China auto parts manufacturer",
    "B2B auto parts",
  ],
  openGraph: {
    title: "SAFORS — Precision Auto Parts for the Global Aftermarket",
    description:
      "Engineered automotive components for independent garages, distributors, and fleet operators worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "SAFORS Automotive",
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
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
