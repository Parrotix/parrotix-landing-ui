import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
// import Stats from './components/Stats'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import GameModes from './components/GameModes'
import SocialProof from './components/SocialProof'
import Premium from './components/Premium'
import Download from './components/Download'
import Footer from './components/Footer'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'
import RefundPolicy from './pages/RefundPolicy'

function LandingPage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/refund" element={<RefundPolicy />} />
    </Routes>
  )
}
