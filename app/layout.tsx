import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Alghazaly Ibhram Santoso - Portofolio",
  description: "Portofolio UI/UX Researcher & Frontend Developer - Alghazaly Ibhram Santoso",
  keywords: ["UI/UX", "Frontend Developer", "Portfolio", "Alghazaly Ibhram Santoso", "Web Development"],
  authors: [{ name: "Alghazaly Ibhram Santoso" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${inter.variable} ${manrope.variable}`}>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-surface">
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
