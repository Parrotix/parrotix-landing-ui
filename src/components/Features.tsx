import { Flame, Trophy, Zap, Mic, Video, Heart, Gamepad2 } from 'lucide-react'
import { useInView } from '../hooks/useInView'


const features = [
  {
    icon: <Gamepad2 size={24} className="text-brand-blue" />,
    title: '8 Unique Game Modes',
    description:
      'From arcade space shooters to voice-matching challenges — every lesson is a new adventure. Learning never repeats itself.',
    gradient: 'from-brand-blue to-blue-600',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    span: 'md:col-span-2',
    large: true,
  },
  {
    icon: <Flame size={24} className="text-brand-orange" />,
    title: 'Daily Streaks',
    description: 'Build a daily habit with streak rewards. Miss a day and lose it — stay consistent to unlock milestones.',
    gradient: 'from-orange-400 to-red-500',
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    span: '',
    large: false,
  },
  {
    icon: <Trophy size={24} className="text-brand-purple" />,
    title: 'Global Leaderboard',
    description: 'Earn XP and compete with thousands of Urdu learners worldwide. See where you rank in real time.',
    gradient: 'from-brand-purple to-pink-500',
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    span: '',
    large: false,
  },
  {
    icon: <Zap size={24} className="text-yellow-500" />,
    title: 'XP & Level System',
    description: 'Every lesson, every game earns you XP. Level up your profile and unlock new units as you progress.',
    gradient: 'from-yellow-400 to-orange-500',
    bg: 'bg-yellow-50',
    iconBg: 'bg-yellow-100',
    span: '',
    large: false,
  },
  {
    icon: <Mic size={24} className="text-brand-green" />,
    title: 'Voice Practice',
    description: 'Speak English out loud and get instant pronunciation feedback. Build the speaking confidence that typing-only apps never give you.',
    gradient: 'from-green-400 to-teal-500',
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
    span: '',
    large: false,
  },
  {
    icon: <Video size={24} className="text-brand-blue" />,
    title: 'Video Lessons',
    description: 'Watch short engaging video lessons with native speakers. See English in real, contextual situations.',
    gradient: 'from-brand-blue to-cyan-500',
    bg: 'bg-cyan-50',
    iconBg: 'bg-cyan-100',
    span: '',
    large: false,
  },
  {
    icon: <Heart size={24} className="text-red-500" />,
    title: 'Hearts System',
    description: 'Make mistakes mindfully. Each lesson gives you hearts — spend them wisely and learn to be precise.',
    gradient: 'from-red-400 to-pink-500',
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
    span: '',
    large: false,
  },
]

export default function Features() {
  const { ref, inView } = useInView()

  return (
    <section id="features" className="section-padding bg-white" ref={ref as React.RefObject<HTMLElement>}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-5">
            ✨ Everything You Need
          </div>
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-brand-dark mb-5">
            Why Learners{' '}
            <span className="text-gradient-blue">Love Parrotix</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            We didn't just build another language app. We built a system that keeps you
            motivated, engaged, and coming back every single day.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {features.map((feat, i) => (
            <div
              key={feat.title}
              className={`group relative rounded-3xl p-7 ${feat.bg} ${feat.span} border border-transparent hover:border-gray-200 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80 + 150}ms` }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${feat.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {feat.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-fredoka font-bold text-brand-dark mb-2.5">
                {feat.title}
              </h3>
              <p className="text-gray-500 font-inter text-sm leading-relaxed">
                {feat.description}
              </p>

              {/* Decorative gradient orb */}
              <div
                className={`absolute bottom-0 right-0 w-32 h-32 rounded-full bg-gradient-to-br ${feat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
