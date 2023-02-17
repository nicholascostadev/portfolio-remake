import { Container } from '@/components/Container'
import { Experiences } from '@/components/Home/Experiences'
import { Hero } from '@/components/Home/Hero'
import { Projects } from '@/components/Home/Projects'

export default function Home() {
  return (
    <div className="w-full">
      <Container className="min-h-screen p-4">
        <Hero />
        {/* @ts-expect-error async components are not correctly typed yet */}
        <Experiences />
      </Container>
    </div>
  )
}
