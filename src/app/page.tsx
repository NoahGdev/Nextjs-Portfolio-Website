import Hero from '@/components/Hero'
import About from '@/components/About'
import VerticalTimeline  from '@/components/Timeline'
import PreviousWork from '@/components/PreviousWork'
import ContactCard from '@/components/ContactCard'
import HireMeCard from '@/components/HireMe'

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <VerticalTimeline/>
      <PreviousWork/>
      <ContactCard/>
      <HireMeCard/>
    </>
  )
}