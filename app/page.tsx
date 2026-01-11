// app/page.tsx
import React from 'react'
import Navbar from '@/components/navbar'
import SubNavbar from '@/components/sub-navbar'
import HeroCarousel from '@/components/home/hero-carousel'
import FeaturesSection from '@/components/home/features-section'
import MessageSection from '@/components/home/message'
import AboutSection from '@/components/home/about'
import GallerySection from '@/components/home/gallery'
import EventsSection from '@/components/home/events'
import NewsSection from '@/components/home/news'
import TeamSection from '@/components/home/team'
import ContactSection from '@/components/home/contact'
import Footer from '@/components/footer'

const Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <SubNavbar />
      <main className="container mx-auto px-4 md:px-6">
        <HeroCarousel />
        <FeaturesSection />
        <MessageSection />
        <AboutSection />
        <GallerySection />
        <EventsSection />
        <NewsSection />
        <TeamSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Page