import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "./ReduxProvider";
import StickyMenu from "@/components/blocks/header/sticky-menu"
import FooterPanel from "@/components/blocks/footer/footer-panel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PasarBone.Com",
  description: "Situs UMKM Aslinya Bone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <StickyMenu />
          {children}
        </ReduxProvider>
        <FooterPanel />
      </body>
    </html>
  );
}
export const dynamic = 'error'


