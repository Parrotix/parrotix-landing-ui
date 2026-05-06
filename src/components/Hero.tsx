import { useState } from 'react'
import { Star, Flame, Trophy, Zap } from 'lucide-react'
import {  aliImg, saraImg, hero_right, playstore } from '../assets/images'

function AppStoreBtn() {
  const [showSoon, setShowSoon] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (showSoon) return
    setShowSoon(true)
    setTimeout(() => setShowSoon(false), 3000)
  }

  return (
    <div className="relative">
      <a
        href="#download"
        onClick={handleClick}
        className="inline-flex items-center gap-3 px-5 py-3.5 bg-black text-white rounded-2xl hover:bg-gray-900 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40 active:translate-y-0"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white shrink-0">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] text-gray-400 leading-none font-inter">Download on the</div>
          <div className="text-sm font-semibold leading-snug font-inter">App Store</div>
        </div>
      </a>
      
      {showSoon && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 bg-brand-blue text-white text-xs font-bold rounded-xl shadow-2xl animate-bounce whitespace-nowrap z-50">
          Coming Soon! 🚀
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-blue rotate-45" />
        </div>
      )}
    </div>
  )
}

function PlayStoreBtn() {
  return (
    <a
      href="#download"
      className="inline-flex items-center gap-3 px-5 py-3.5 border border-white/25 text-white rounded-2xl hover:bg-white/10 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 active:translate-y-0"
    >
      <img src={playstore} alt="Play Store" className="w-6 h-6" />
      <div className="text-left">
        <div className="text-[10px] text-white/60 leading-none font-inter">Get it on</div>
        <div className="text-sm font-semibold leading-snug font-inter">Google Play</div>
      </div>
    </a>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen bg-brand-dark relative overflow-hidden flex items-center pt-20">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-24 w-[500px] h-[500px] bg-brand-blue/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-12 right-1/4 w-[400px] h-[400px] bg-brand-purple/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-brand-orange/8 rounded-full blur-2xl" />
        {/* Grid dots */}
        <div className="absolute inset-0 bg-dots" />
        {/* Subtle top gradient fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-brand-dark to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue text-sm font-medium mb-7 animate-fade-in">
              <span className="text-base">🦜</span>
              <span>اردو بولنے والوں کے لیے بنایا گیا</span>
            </div> */}

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-fredoka font-bold text-white leading-[1.05] mb-6">
              Master English.{' '}
              <span className="text-gradient-blue block sm:inline">The Fun Way.</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl leading-relaxed font-inter">
              Parrotix turns English learning into an epic adventure for Urdu speakers.
              Earn XP, maintain daily streaks, and battle for the top of the global leaderboard
              — all through 8 uniquely designed games.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <AppStoreBtn />
              <PlayStoreBtn />
            </div>

            {/* Social proof row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-brand-dark overflow-hidden">
                    <img src={aliImg} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-brand-dark overflow-hidden">
                    <img src={saraImg} alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-brand-purple flex items-center justify-center text-white text-xs font-bold">
                    B
                  </div>
                </div>
                <span className="font-medium text-gray-400">50K+ learners</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1 font-medium text-gray-400">4.9 rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-gray-400 font-medium">Free to start</span>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup + Floating Elements */}
          <div className="relative flex justify-center lg:justify-end items-center min-h-[520px] lg:min-h-0">
            {/* Glow ring behind phone */}
            <div className="absolute w-[320px] h-[320px] rounded-full bg-brand-blue/10 blur-2xl animate-pulse-soft" />

         
                {/* Screen content */}
                <img
                  src={hero_right}
                  alt="Parrotix app journey screen"
                  className="w-full h-full object-cover object-top pt-10"
                />
            
           

            {/* Parrot mascot floating above */}
            {/* <div className="absolute top-18 right-0 z-20 animate-float">
              <img
                src={parrotFlying}
                alt="Parrotix parrot mascot"
                className="w-28 h-28 object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 8px 24px rgba(21,173,226,0.5))' }}
              />
            </div> */}

            {/* Floating gamification badge: Streak */}
            <div className="absolute top-18 -left-6 lg:-left-12 z-20 animate-float-slow">
              <div className="flex items-center gap-2 px-4 py-2.5 glass rounded-2xl shadow-xl">
                <div className="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center">
                  <Flame size={16} className="text-brand-orange" />
                </div>
                <div>
                  <div className="text-white font-fredoka font-semibold text-sm leading-none">Day 7 Streak!</div>
                  <div className="text-gray-400 text-[10px] font-inter mt-0.5">Keep it up 🔥</div>
                </div>
              </div>
            </div>

            {/* Floating gamification badge: XP */}
            <div className="absolute top-1/3 -right-6 lg:-right-8 z-20 animate-float-delayed">
              <div className="flex items-center gap-2 px-4 py-2.5 glass rounded-2xl shadow-xl">
                <div className="w-8 h-8 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                  <Zap size={16} className="text-brand-blue" />
                </div>
                <div>
                  <div className="text-white font-fredoka font-semibold text-sm leading-none">+1,250 XP</div>
                  <div className="text-gray-400 text-[10px] font-inter mt-0.5">Today's progress</div>
                </div>
              </div>
            </div>

            {/* Floating gamification badge: Rank */}
            <div className="absolute bottom-24 -left-4 lg:-left-10 z-20 animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center gap-2 px-4 py-2.5 glass rounded-2xl shadow-xl">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/20 flex items-center justify-center">
                  <Trophy size={16} className="text-brand-purple" />
                </div>
                <div>
                  <div className="text-white font-fredoka font-semibold text-sm leading-none">Rank #8 🏆</div>
                  <div className="text-gray-400 text-[10px] font-inter mt-0.5">Global leaderboard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
