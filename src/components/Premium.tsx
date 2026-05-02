import { Check, X } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const freeFeatures = [
  { label: '5 lesson units', included: true },
  { label: '3 game modes', included: true },
  { label: '5 hearts per day', included: true },
  { label: 'Basic leaderboard', included: true },
  { label: 'Voice practice', included: false },
  { label: 'All 8 game modes', included: false },
  { label: 'Offline access', included: false },
  { label: 'Ad-free experience', included: false },
]

const plusFeatures = [
  { label: 'All 15 lesson units', included: true },
  { label: 'All 8 game modes', included: true },
  { label: 'Unlimited hearts', included: true },
  { label: 'Full leaderboard + rank badge', included: true },
  { label: 'Voice recognition practice', included: true },
  { label: 'Offline mode', included: true },
  { label: 'Ad-free experience', included: true },
  { label: 'Priority support', included: true },
]

export default function Premium() {
  const { ref, inView } = useInView()

  return (
    <section
      id="pricing"
      className="section-padding bg-slate-50 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots-dark pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mb-5">
            💎 Parrotix Plus
          </div>
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-brand-dark mb-5">
            Choose Your{' '}
            <span className="text-gradient-purple">Learning Plan</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Start free and upgrade when you're ready to unlock the full Parrotix experience.
            No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* Free Plan */}
          <div
            className={`bg-white rounded-3xl p-8 border border-gray-200 shadow-sm transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="mb-8">
              <div className="text-sm font-inter font-semibold text-gray-400 uppercase tracking-widest mb-3">
                Free
              </div>
              <div className="flex items-end gap-2 mb-3">
                <span className="text-5xl font-fredoka font-bold text-brand-dark">Rs. 0</span>
                <span className="text-gray-400 font-inter text-sm mb-2">/month</span>
              </div>
              <p className="text-gray-500 font-inter text-sm">
                Perfect for getting started. No credit card required.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {freeFeatures.map((feat) => (
                <li key={feat.label} className="flex items-center gap-3">
                  {feat.included ? (
                    <div className="w-5 h-5 rounded-full bg-brand-green/15 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-brand-green" strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      <X size={11} className="text-gray-300" strokeWidth={3} />
                    </div>
                  )}
                  <span
                    className={`font-inter text-sm ${
                      feat.included ? 'text-gray-700' : 'text-gray-300 line-through'
                    }`}
                  >
                    {feat.label}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="block w-full py-3.5 text-center bg-gray-100 text-brand-dark font-semibold rounded-2xl hover:bg-gray-200 transition-colors duration-200 font-inter"
            >
              Download Free
            </a>
          </div>

          {/* Plus Plan */}
          <div
            className={`relative bg-brand-dark rounded-3xl p-8 border border-white/10 shadow-2xl overflow-hidden transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Best value badge */}
            <div className="absolute top-5 right-5">
              <span className="px-3 py-1.5 bg-brand-orange text-white text-xs font-fredoka font-semibold rounded-full">
                Most Popular ⭐
              </span>
            </div>

            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-blue/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative mb-8">
              <div className="text-sm font-inter font-semibold text-brand-blue uppercase tracking-widest mb-3">
                Parrotix Plus
              </div>
              <div className="flex items-end gap-2 mb-1">
                <span className="text-5xl font-fredoka font-bold text-white">Rs. 799</span>
                <span className="text-gray-400 font-inter text-sm mb-2">/month</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-inter text-xs line-through">Rs. 1,299/month</span>
                <span className="px-2 py-0.5 bg-brand-green/20 text-brand-green text-[10px] font-fredoka font-semibold rounded-full">
                  Save 38%
                </span>
              </div>
            </div>

            <ul className="relative space-y-3 mb-8">
              {plusFeatures.map((feat) => (
                <li key={feat.label} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-blue/20 flex items-center justify-center shrink-0">
                    <Check size={11} className="text-brand-blue" strokeWidth={3} />
                  </div>
                  <span className="font-inter text-sm text-gray-300">{feat.label}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="relative block w-full py-3.5 text-center bg-brand-orange text-white font-semibold rounded-2xl hover:bg-orange-500 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 font-inter"
            >
              Upgrade to Plus →
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p
          className={`text-center text-gray-400 font-inter text-sm mt-8 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          All plans include access to the core Parrotix platform. Cancel Plus anytime — no questions asked.
        </p>
      </div>
    </section>
  )
}
