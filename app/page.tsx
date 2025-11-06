import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SolutionSection } from "@/components/solution-section"
import { ImpactSection } from "@/components/impact-section"
import { TechnologySection } from "@/components/technology-section"
import { ToriMedSection } from "@/components/torimed-section"
import { VideoSection } from "@/components/video-section"
import { UserGuideSection } from "@/components/user-guide-section"
import { TeamSection } from "@/components/team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <ImpactSection />
      <TechnologySection />
      <ToriMedSection />
      <VideoSection />
      <UserGuideSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
