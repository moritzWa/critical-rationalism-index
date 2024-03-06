import Concepts from "@/components/Concepts";
import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import Newsletter from "@/components/Newsletter";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Layout>
        <HeroSection />
        <Testimonial />
        <Concepts />
        <Newsletter />
      </Layout>
    </main>
  );
}
