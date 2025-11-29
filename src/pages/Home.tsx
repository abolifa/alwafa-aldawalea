import About from "@/components/about";
import { Brands } from "@/components/brands";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import { Products } from "@/components/products";
import { WhyUs } from "@/components/why-us";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Brands />
      <Products />
      <WhyUs />
      <Contact />
    </div>
  );
};

export default Home;
