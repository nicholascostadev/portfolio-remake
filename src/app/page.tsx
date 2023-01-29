import { Container } from '@/components/Container'
import { AboutMe } from '@/components/Home/AboutMe'
import { Hero } from '@/components/Home/Hero'
import { Projects } from '@/components/Home/Projects'

export default function Home() {
  return (
    <div className="w-full">
      <Container className="p-4 min-h-screen">
        <Hero />
        {/* @ts-ignore */}
        <Projects />
        <AboutMe />
      </Container>
    </div>
  )
}
