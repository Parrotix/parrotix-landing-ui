import { Star } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const leaderboard = [
  { rank: 1, name: 'Ali Khan', city: 'Karachi', xp: '12,450', avatar: 'A', color: 'bg-yellow-500' },
  { rank: 2, name: 'Sara Ahmed', city: 'Lahore', xp: '11,890', avatar: 'S', color: 'bg-pink-500' },
  { rank: 3, name: 'Bilal Malik', city: 'Islamabad', xp: '10,234', avatar: 'B', color: 'bg-brand-blue' },
  { rank: 4, name: 'Ayesha Siddiqui', city: 'Faisalabad', xp: '9,876', avatar: 'A', color: 'bg-brand-purple' },
  { rank: 5, name: 'Omar Farooq', city: 'Multan', xp: '8,543', avatar: 'O', color: 'bg-brand-green' },
]

const rankMedal = (rank: number) => {
  if (rank === 1) return '🥇'
  if (rank === 2) return '🥈'
  if (rank === 3) return '🥉'
  return `#${rank}`
}

const testimonials = [
  {
    name: 'Ali Khan',
    location: 'Karachi, Pakistan',
    rating: 5,
    text: "Parrotix نے میری انگریزی بالکل بدل دی! The streak system keeps me coming back every single day. I'm on day 45 now and my English is unrecognisable compared to before.",
    avatar: '/images/ali.jpg',
    level: 'Level 8 Learner',
  },
  {
    name: 'Sara Ahmed',
    location: 'Lahore, Pakistan',
    rating: 5,
    text: "I tried Duolingo, Babbel — nothing stuck. Parrotix is the first app that actually understands Urdu speakers. The conversation games are incredibly realistic and fun!",
    avatar: '/images/sara.jpg',
    level: 'Level 12 Learner',
  },
  {
    name: 'Bilal Malik',
    location: 'Islamabad, Pakistan',
    rating: 5,
    text: "The leaderboard is addictive. I wake up every morning and my first thought is 'I need to protect my rank.' My English speaking confidence has skyrocketed in just 2 months.",
    avatar: null,
    initial: 'B',
    level: 'Level 10 Learner',
  },
]

export default function SocialProof() {
  const { ref, inView } = useInView()

  return (
    <section
      className="section-padding bg-white relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-purple/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-blue/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-green/10 text-brand-green rounded-full text-sm font-medium mb-5">
            🏆 Real Results
          </div>
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-brand-dark mb-5">
            Join the{' '}
            <span className="text-gradient-blue">Winning Community</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Thousands of Urdu speakers are already climbing the leaderboard and speaking English
            with confidence. Your turn is next.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Leaderboard */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-brand-dark rounded-3xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-fredoka font-bold text-white">Global Leaderboard</h3>
                <span className="text-brand-blue text-xs font-inter font-medium bg-brand-blue/10 px-3 py-1 rounded-full">
                  Live
                </span>
              </div>

              {/* XP Bar header */}
              <div className="flex items-center justify-between text-[10px] font-inter text-gray-500 mb-3 px-2">
                <span>Rank / Player</span>
                <span>Total XP</span>
              </div>

              <div className="space-y-2">
                {leaderboard.map((player, i) => (
                  <div
                    key={player.name}
                    className={`flex items-center gap-3 p-3 rounded-2xl transition-all duration-300 ${
                      i === 0 ? 'bg-yellow-500/10 border border-yellow-500/20' : 'hover:bg-white/5'
                    }`}
                    style={{ transitionDelay: `${i * 80 + 400}ms` }}
                  >
                    {/* Rank */}
                    <div className="w-8 text-center text-sm font-fredoka font-bold text-gray-400">
                      {rankMedal(player.rank)}
                    </div>

                    {/* Avatar */}
                    <div
                      className={`w-9 h-9 rounded-full ${player.color} flex items-center justify-center text-white text-sm font-fredoka font-bold shrink-0`}
                    >
                      {player.avatar}
                    </div>

                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-fredoka font-semibold truncate">
                        {player.name}
                      </div>
                      <div className="text-gray-500 text-[10px] font-inter">{player.city}</div>
                    </div>

                    {/* XP */}
                    <div className="text-brand-blue text-sm font-fredoka font-bold shrink-0">
                      {player.xp} XP
                    </div>
                  </div>
                ))}

                {/* "You" placeholder */}
                <div className="flex items-center gap-3 p-3 rounded-2xl border border-dashed border-brand-blue/30 mt-2">
                  <div className="w-8 text-center text-sm font-fredoka font-bold text-gray-600">#?</div>
                  <div className="w-9 h-9 rounded-full border-2 border-dashed border-brand-blue/40 flex items-center justify-center text-brand-blue/50 text-xs font-fredoka">
                    You
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-500 text-sm font-fredoka">Download to join</div>
                  </div>
                  <a
                    href="#download"
                    className="text-brand-blue text-xs font-inter font-semibold hover:text-blue-400 transition-colors"
                  >
                    Start →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div
            className={`lg:col-span-3 space-y-5 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ transitionDelay: `${i * 100 + 400}ms` }}
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 font-inter text-sm leading-relaxed mb-5 italic">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-blue/20 group-hover:ring-brand-blue/40 transition-all"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-brand-purple flex items-center justify-center text-white font-fredoka font-bold text-sm">
                      {(t as { initial?: string }).initial}
                    </div>
                  )}
                  <div>
                    <div className="text-brand-dark font-fredoka font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-400 text-xs font-inter">
                      {t.location} · {t.level}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
