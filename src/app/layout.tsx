import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "LeBold Studios",
  verification: {
    google: "XiqH1097vsfqZv7yWV3fMWCX2nJLN1FNwABWDxlJW0k",
  },

  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
  },
  openGraph: {
    title: "LeBold Studios",
    description: "Professional photography studio since 2008.",
    url: "https://leboldstudios.com",
    siteName: "LeBold Studios",
    images: [
      {
        url: "https://leboldstudios.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LeBold Studios",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeBold Studios",
    description: "Professional photography studio since 2008.",
    images: ["https://leboldstudios.com/og-image.jpg"],
  },
};