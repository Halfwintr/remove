import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Blogpost } from "@/components/Blogpost/Blogpost";

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
