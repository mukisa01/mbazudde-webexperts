import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mbazudde WebExperts | Professional Websites & Digital Solutions",
  description:
    "Mbazudde WebExperts creates modern, professional and responsive websites and digital solutions for businesses and organizations.",
  keywords: [
    "Mbazudde WebExperts",
    "website design Uganda",
    "web development Uganda",
    "business websites",
    "web applications",
    "digital solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}