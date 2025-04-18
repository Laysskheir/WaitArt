import { auth } from "@/auth";
import { Hero } from "@/components/hero";
import FAQSection from "@/components/main/faq-section";
import InfoSection from "@/components/main/info-section";
import { Testimonials } from "@/components/main/testimonials";

export default function Home() {
  return (
    <main className="max-w-7xl  mx-auto sm:px-6 lg:px-8">
      <Hero />
      {/* <Testimonials /> */}
      {/* <FAQSection/> */}
    </main>
  );
}
