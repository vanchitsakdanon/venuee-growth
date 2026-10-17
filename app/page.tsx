import { Budget } from "./components/Budget";
import { Clients } from "./components/Clients";
import { Compare } from "./components/Compare";
import { Contact } from "./components/Contact";
import { Faq } from "./components/Faq";
import { Fit } from "./components/Fit";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { WhyUs } from "./components/WhyUs";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <WhyUs />
        <Services />
        <Process />
        <Compare />
        <Fit />
        <Budget />
        <Clients />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
