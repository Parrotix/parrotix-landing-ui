import { useInView } from '../hooks/useInView'
import { parrotSideView, starsImg } from '../assets/images'

function AppStoreLarge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-4 px-7 py-4 bg-white text-brand-dark rounded-2xl hover:bg-gray-50 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/20 active:translate-y-0"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-brand-dark shrink-0">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="text-left">
        <div className="text-[11px] text-gray-500 leading-none font-inter">Download on the</div>
        <div className="text-base font-bold leading-snug font-inter">App Store</div>
      </div>
    </a>
  )
}

function PlayStoreLarge() {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-4 px-7 py-4 bg-white/10 text-white border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:border-white/40 active:translate-y-0"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 shrink-0" fill="none">
        <path d="M3.18 23.76c.36.2.77.22 1.15.06L15.54 12 4.33.18C3.95.02 3.54.04 3.18.24 2.46.64 2 1.4 2 2.28v19.44c0 .88.46 1.64 1.18 2.04z" fill="#EA4335" />
        <path d="M20.4 10.22l-3.1-1.78-3.67 3.56 3.67 3.56 3.14-1.8c.9-.51.9-1.02 0-1.53h-.04z" fill="#FBBC04" />
        <path d="M4.33.18L15.54 12 17.3 10.22 5.48.18A2.27 2.27 0 004.33.18z" fill="#4285F4" />
        <path d="M4.33 23.82a2.27 2.27 0 001.15-.18l11.82-10.04L15.54 12 4.33 23.82z" fill="#34A853" />
      </svg>
      <div className="text-left">
        <div className="text-[11px] text-white/60 leading-none font-inter">Get it on</div>
        <div className="text-base font-bold leading-snug font-inter">Google Play</div>
      </div>
    </a>
  )
}

export default function Download() {
  const { ref, inView } = useInView()

  return (
    <section
      id="download"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1a2744 40%, #0f172a 100%)' }}
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-60" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full -translate-y-1/2 blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-brand-blue/15 rounded-full -translate-y-1/2 blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-orange/20 text-brand-orange rounded-full text-sm font-medium mb-6">
              📲 Available Now
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold text-white mb-6 leading-tight">
              Start Your{' '}
              <span className="text-gradient-orange">English Journey</span>{' '}
              Today
            </h2>

            <p className="text-gray-400 text-lg font-inter leading-relaxed mb-10 max-w-lg">
              Download Parrotix for free and join 50,000+ Urdu speakers already mastering
              English the fun way. Your first lesson is just 5 minutes away.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <AppStoreLarge />
              <PlayStoreLarge />
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <span className="text-brand-green text-[10px]">✓</span>
                </div>
                <span className="font-inter">Free to download</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <span className="text-brand-green text-[10px]">✓</span>
                </div>
                <span className="font-inter">No credit card needed</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                  <span className="text-brand-green text-[10px]">✓</span>
                </div>
                <span className="font-inter">iOS & Android</span>
              </div>
            </div>
          </div>

          {/* Right: Parrot mascot + floating elements */}
          <div
            className={`flex justify-center items-center relative transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Glowing circle */}
            <div className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 blur-3xl animate-pulse-soft" />

            {/* Parrot side view */}
            <div className="relative z-10 animate-float">
              <img
                src={parrotSideView}
                alt="Parrotix parrot"
                className="w-72 md:w-96 object-contain"
                style={{ filter: 'drop-shadow(0 16px 48px rgba(255,155,35,0.3))' }}
              />
            </div>

            {/* Floating achievement cards */}
            <div className="absolute top-8 right-0 lg:-right-4 z-20 animate-float-slow">
              <div className="flex items-center gap-3 px-4 py-3 glass rounded-2xl shadow-xl">
                <img src={starsImg} alt="Stars" className="w-10 h-10 object-contain" />
                <div>
                  <div className="text-white font-fredoka font-semibold text-sm leading-none">Perfect Lesson!</div>
                  <div className="text-gray-400 text-[10px] font-inter mt-0.5">+100 XP bonus earned</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-0 lg:-left-4 z-20 animate-float-delayed">
              <div className="flex items-center gap-3 px-4 py-3 glass rounded-2xl shadow-xl">
                <div className="text-2xl">🔥</div>
                <div>
                  <div className="text-white font-fredoka font-semibold text-sm leading-none">30-Day Streak!</div>
                  <div className="text-gray-400 text-[10px] font-inter mt-0.5">Milestone unlocked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
