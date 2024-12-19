import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono"
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adem Odza",
  description: "Adem Odza's Portfolio",
  authors: {name: "Adem Odza", url: "www.ademodza.com"},
  abstract: "This is my portfolio website. It contains information about my skills, work history, personal projects, and personal interests."
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`body antialiased`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
