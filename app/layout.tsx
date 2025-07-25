import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./section/Header";
import Footer from "./section/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashank Thapa",
  keywords: [
    "Shashank Thapa Portfolio",
    "Thapa Shashank Portfolio",
    "Shashank Thapa",
    "Full Stack Developer",
    "Shashank Thapa",
    "Web Developer",
  ],
  description:
    "Official portfolio of Shashank Thapa – Full Stack Developer. Explore projects, skills, and experience.",
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
        <link rel="icon" href="/favicon.ico" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
