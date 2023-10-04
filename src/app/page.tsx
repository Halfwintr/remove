import { Blogpost } from "@/components/Blogpost/Blogpost";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero/Hero";
import { Newsletter } from "@/components/Newsletter/Newsletter";
import { Support } from "@/components/Suport/Support";
import { Team } from "@/components/Team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      {/* <Hero mirror revert /> */}
      <Support />
      <Team />
      <Newsletter />
      <Blogpost />
      <Footer />
    </>
  );
}
