import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Thai, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-plex-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_NAME = "Venuee Performance Marketing";
const TITLE = "Venuee — Start your growth engine.";
const DESCRIPTION =
  "Performance Marketing Agency สัญชาติไทย เปลี่ยนงบโฆษณาให้เป็นยอดขายที่วัดผลได้ทุกบาท บริหารโฆษณาบน Meta, Google, TikTok, LINE ครบในทีมเดียว #2 Thai Independent Agency จาก Meta First Agency Awards 2025";

export const metadata: Metadata = {
  metadataBase: new URL("https://venuee-growth.vercel.app"),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "Performance Marketing Agency",
    "Meta Ads",
    "Google Ads",
    "TikTok Ads",
    "LINE Ads",
    "Ecommerce",
    "Venuee",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: SITE_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${plexThai.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
