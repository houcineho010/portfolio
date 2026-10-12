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
  metadataBase: new URL("https://portfolio-delta-virid-4fch5w2jka.vercel.app"),
  title: {
    default: "Lahoucine | AI, Automation, Web & Digital Systems",
    template: "%s | Lahoucine",
  },
  description:
    "Portfolio of Lahoucine, featuring practical projects in AI automation, software, web development, e-commerce, and digital marketing.",
  openGraph: {
    title: "Lahoucine | AI, Automation, Web & Digital Systems",
    description:
      "Practical projects across AI automation, software, web development, e-commerce, and digital marketing.",
    url: "https://portfolio-delta-virid-4fch5w2jka.vercel.app",
    siteName: "Lahoucine Portfolio",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
