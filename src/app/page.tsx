import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className="w-full">
      <Container className="p-4 min-h-screen">
        <Hero />
      </Container>
    </div>
  )
}
