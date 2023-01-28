import { Container } from '@/components/Container'
import { Hero } from '@/components/Home/Hero'
import { Projects } from '@/components/Home/Projects'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

export default function Home() {
  return (
    <div className="w-full">
      <Container className="p-4 min-h-screen">
        <Hero />
        {/* @ts-ignore */}
        <Projects />
      </Container>
    </div>
  )
}
