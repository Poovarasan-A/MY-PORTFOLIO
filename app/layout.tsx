import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poovarasan | Portfolio",
  description: "Portfolio of Poovarasan Arumugam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black overflow-x-hidden scrollbar-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
