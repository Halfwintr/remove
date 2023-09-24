import { Footer } from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CompanyBrand from "../../public/images/remove-brand.svg";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

import { Header } from "../components/Header";
import { Hero } from "@/components/Hero/Hero";
import { Team } from "@/components/Team/Team";

export const metadata: Metadata = {
  title: "Re:move",
  description: "Get projects moving again",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          <Hero />
          <Hero mirror revert />
          <Team />
        </main>
      </body>
    </html>
  );
}
