import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { Header } from "@/components/Header";
import { Newsletter } from "@/components/Newsletter/Newsletter";
import { Sitemap } from "@/components/Sitemap";

export const metadata: Metadata = {
  title: "Re:move",
  description: "Get projects moving again",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
