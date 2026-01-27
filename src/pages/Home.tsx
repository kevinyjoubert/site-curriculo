import { Header } from '../components/layout/Header'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Projects } from '../sections/Projects'
import { Work } from '../sections/Work'
import { Contact } from '../sections/Contact'
import { FloatingSocial } from '../components/layout/FloatingSocial'
import { PageBackground } from '../components/layout/PageBackground'

export function Home() {
  return (
    <>
      <Header />
      <FloatingSocial />

      
        <main className="bg-zinc-950 text-zinc-100 pt-16">
          <PageBackground>
            <Hero />
          </PageBackground>

          <PageBackground variant='medium'>
            <About />
            <Projects />
          </PageBackground>

          <PageBackground variant='soft'>
            <Work />
            <Contact />
          </PageBackground>
        </main>

      {/* <Footer /> */}
    </>
  )
}
