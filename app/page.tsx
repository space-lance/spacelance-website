import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  )
}
