import { useInView } from '../hooks/useInView'

const stats = [
  { value: '50K+', label: 'Active Learners', emoji: '🎓' },
  { value: '8', label: 'Game Modes', emoji: '🎮' },
  { value: '15', label: 'Lesson Units', emoji: '📚' },
  { value: '4.9★', label: 'App Rating', emoji: '⭐' },
]

export default function Stats() {
  const { ref, inView } = useInView()

  return (
    <section
      className="relative -mt-1 bg-gradient-to-r from-brand-blue via-blue-500 to-brand-purple py-16"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Top wave from hero */}
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-3xl mb-1">{stat.emoji}</div>
              <div className="text-4xl md:text-5xl font-fredoka font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-blue-100/80 text-sm font-inter font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
