// app/page.tsx
import HeroCarousel from "@/components/home/hero-carousel";
import FeaturesSection from "@/components/home/features-section";
import MessageSection from "@/components/home/message";
import AboutSection from "@/components/home/about";
import GallerySection from "@/components/home/gallery";
import EventsSection from "@/components/home/events";
import NewsSection from "@/components/home/news";
import TeamSection from "@/components/home/team";
import ContactSection from "@/components/home/contact";

export default function Page() {
  return (
    <>
      <HeroCarousel />
      <FeaturesSection />
      {/* <MessageSection /> */}
      <AboutSection />
      <GallerySection />
      <EventsSection />
      <NewsSection />
      <TeamSection />
      <ContactSection />
    </>
  );
}
