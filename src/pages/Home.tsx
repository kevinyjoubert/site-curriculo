import { Header } from '../components/layout/Header'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
import { Work } from '../sections/Work'
import { Contact } from '../sections/Contact'
import { FloatingSocial } from '../components/layout/FloatingSocial'

export function Home() {
  return (
    <>
      <Header />
      <FloatingSocial />

      <Hero />
      <About />
      <Projects />
      <Work />
      <Contact />

    </>
  )
}
