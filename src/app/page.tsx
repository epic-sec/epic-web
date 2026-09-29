import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { DominanceDemo } from "@/components/sections/DominanceDemo";
import { Witness } from "@/components/sections/Witness";
import { Scorecard } from "@/components/sections/Scorecard";
import { Validation } from "@/components/sections/Validation";
import { Honesty } from "@/components/sections/Honesty";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-w-0">
        <Hero />
        <DominanceDemo />
        <Witness />
        <Scorecard />
        <Validation />
        <Honesty />
      </main>
      <Footer />
    </>
  );
}
