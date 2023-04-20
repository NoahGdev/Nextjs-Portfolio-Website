import Hero from '@/components/Hero'
import About from '@/components/About'
import VerticalTimeline  from '@/components/Timeline'
import PreviousWork from '@/components/PreviousWork'

export default function Home() {
  return (
    <>
      <Hero/>
      <About/>
      <VerticalTimeline/>
      <PreviousWork/>
    </>
  )
}