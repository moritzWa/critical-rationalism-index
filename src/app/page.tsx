import Concepts from "@/components/Concepts";
import HeroSection from "@/components/HeroSection";
import Newsletter from "@/components/Newsletter";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Testimonial />
      <Concepts />
      <Newsletter />
    </main>
  );
}
