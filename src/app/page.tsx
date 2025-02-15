import HeroSlider from "@/components/home/HeroSlider";
import CandleShowcase from "@/components/home/CandleShowcase";
import { EcoFriendlySection } from "@/components/home/EcoFriendlySection";
import StorySection from "@/components/home/StorySection";
import { TestimonialSection } from "@/components/home/Testimonial";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StorySection />
      <CandleShowcase />
      <EcoFriendlySection />
      <TestimonialSection />
    </>
  );
}
