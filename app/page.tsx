import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'

export default function Home() {
  const [hovereCard, setHover] = useState('ui-ux')
  const [hoverProject, setProject] = useState('')
  const videoRef: any = useRef(null);

  return (
    <div className='scroll-smooth'>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
    </div>
  )
}
