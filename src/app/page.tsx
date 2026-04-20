import AboutSection from './components/AboutSection'
import EngineeringApproachSection from './components/EngineeringApproachSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import TrustSignalsSection from './components/TrustSignalsSection'
import ContactPage from './main/contact/page'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EngineeringApproachSection />
        <ProjectsSection />
        <SkillsSection />
        <TrustSignalsSection />
        <ContactPage />
      </main>
      <Footer />
    </>
  )
}
