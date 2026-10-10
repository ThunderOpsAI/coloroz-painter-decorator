import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#991b1b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ColorOz Painter & Decorator | Heritage Home Restoration Wangaratta & North East VIC",
  description: "Specialist heritage painter and decorator across Wangaratta, Beechworth, Chiltern & North East Victoria. Victorian, Edwardian, and Federation weatherboard restoration, authentic period colour palettes, and decorative plaster finishes. Call 0429 691 397.",
  keywords: [
    "ColorOz Painter & Decorator",
    "Painter Wangaratta",
    "Heritage Painter Wangaratta",
    "Historic Home Restoration Beechworth Chiltern",
    "Federation Weatherboard Painting Victoria",
    "Victorian House Painter North East Victoria",
    "Lead Safe Painting Abatement Wangaratta",
    "Authentic Heritage Colour Schemes"
  ],
  openGraph: {
    title: "ColorOz Painter & Decorator | Heritage & Period Home Restoration",
    description: "Master painting and decorating for historic Victorian, Edwardian, and Federation homes across Wangaratta & North East VIC.",
    type: "website",
    locale: "en_AU",
    siteName: "ColorOz Painter & Decorator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
