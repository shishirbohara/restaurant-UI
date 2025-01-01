import About from "@/components/Landing/About";
import ChefWord from "@/components/Landing/ChefWord";
import Discover from "@/components/Landing/Discover";
import Gallery from "@/components/Landing/Gallery";
import Hero from "@/components/Landing/Hero";
import OntheMenu from "@/components/Landing/OntheMenu";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <OntheMenu />
      <ChefWord />
      <Gallery />
      <Discover />
    </div>
  );
}
