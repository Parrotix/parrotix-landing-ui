import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import GameModes from './components/GameModes'
import SocialProof from './components/SocialProof'
import Premium from './components/Premium'
import Download from './components/Download'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Hero />
      {/* <Stats /> */}
      <Features />
      <HowItWorks />
      <GameModes />
      <SocialProof />
      <Premium />
      <Download />
      <Footer />
    </div>
  )
}
