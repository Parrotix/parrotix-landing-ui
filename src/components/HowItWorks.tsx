import { UserPlus, Gamepad2, TrendingUp } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    icon: <UserPlus size={28} className="text-brand-blue" />,
    title: 'Set Up Your Profile',
    description:
      "Tell us your current English level and what you want to achieve. We'll personalize your entire learning path — from vocabulary to conversation scenarios.",
    color: 'brand-blue',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    numberColor: 'text-brand-blue',
    iconBg: 'bg-brand-blue/10',
  },
  {
    number: '02',
    icon: <Gamepad2 size={28} className="text-brand-orange" />,
    title: 'Play Games. Earn XP.',
    description:
      'Every day, complete fun game-based lessons. Match pictures, listen and choose, speak and match — each game type targets a different English skill.',
    color: 'brand-orange',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    numberColor: 'text-brand-orange',
    iconBg: 'bg-orange-100',
  },
  {
    number: '03',
    icon: <TrendingUp size={28} className="text-brand-purple" />,
    title: 'Climb the Leaderboard',
    description:
      'Watch your rank rise as you collect XP and maintain your streaks. Challenge other Urdu speakers globally and celebrate your milestones.',
    color: 'brand-purple',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    numberColor: 'text-brand-purple',
    iconBg: 'bg-purple-100',
  },
]

export default function HowItWorks() {
  const { ref, inView } = useInView()

  return (
    <section
      id="how-it-works"
      className="section-padding bg-slate-50 relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-blue/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-brand-purple/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium mb-5">
            🚀 Simple to Start
          </div>
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-brand-dark mb-5">
            Start Speaking English in{' '}
            <span className="text-gradient-orange">3 Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            No textbooks. No boring drills. Just pick up the app, play, and watch your English
            transform — one game at a time.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-0.5 bg-gradient-to-r from-brand-blue via-brand-orange to-brand-purple z-0" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 150 + 200}ms` }}
            >
              <div className={`${step.bg} ${step.border} border rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group`}>
                {/* Step number + icon row */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${step.iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {step.icon}
                  </div>
                  <span className={`text-6xl font-fredoka font-bold ${step.numberColor} opacity-20 leading-none`}>
                    {step.number}
                  </span>
                </div>

                <h3 className="text-2xl font-fredoka font-bold text-brand-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-inter text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below steps */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-dark text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 font-inter"
          >
            <span>Start Learning for Free</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
