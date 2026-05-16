import { Languages, Trophy, Mic, Smartphone } from 'lucide-react'
import { useInView } from '../hooks/useInView'

// Illustrative leaderboard preview — not real users. The "Preview" badge makes this
// explicit so we're not implying real-time live rankings before launch.
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

// Honest pre-launch value cards — no fabricated testimonials/user counts.
// Swap these for real reviews once the app has them.
const reasons = [
  {
    icon: <Languages size={22} className="text-brand-blue" />,
    iconBg: 'bg-blue-50',
    title: 'Built for Urdu speakers',
    body:
      'Every lesson, hint, and explanation is designed around how Urdu speakers actually learn English — not retrofitted from a generic curriculum.',
  },
  {
    icon: <Mic size={22} className="text-brand-green" />,
    iconBg: 'bg-green-50',
    title: 'Speak from day one',
    body:
      'Real pronunciation practice on every lesson — not just typing. Build confidence speaking out loud, not just reading.',
  },
  {
    icon: <Trophy size={22} className="text-brand-purple" />,
    iconBg: 'bg-purple-50',
    title: 'Streaks that actually motivate',
    body:
      'Daily XP, streaks, and a global leaderboard turn 10 minutes of practice into a habit you look forward to.',
  },
  {
    icon: <Smartphone size={22} className="text-brand-orange" />,
    iconBg: 'bg-orange-50',
    title: 'Designed for your phone',
    body:
      'Crisp, native Android experience. No bloated web wrapper, no laggy lessons — just smooth, polished gameplay.',
  },
]

export default function SocialProof() {
  const { ref, inView } = useInView()

  return (
    <section
      id="social-proof"
      className="section-padding bg-white relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-medium mb-5">
            🦜 Why Parrotix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold text-brand-dark mb-5">
            Made for the way{' '}
            <span className="text-gradient-blue">you learn</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            We built Parrotix because every English-learning app out there was designed for someone
            else. Here's what makes it different.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 items-start">
          {/* Leaderboard preview */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-brand-dark rounded-3xl p-5 sm:p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-fredoka font-bold text-white">Global Leaderboard</h3>
                <span className="text-brand-blue text-[10px] sm:text-xs font-inter font-medium bg-brand-blue/10 px-3 py-1 rounded-full">
                  Preview
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
              <p className="mt-3 text-center text-[10px] text-gray-600 font-inter">
                Example leaderboard — your rank starts the moment you install
              </p>
            </div>
          </div>

          {/* Reason cards */}
          <div
            className={`lg:col-span-3 grid sm:grid-cols-2 gap-4 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ transitionDelay: `${i * 80 + 400}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-11 h-11 rounded-2xl ${r.iconBg} mb-4`}>
                  {r.icon}
                </div>
                <h3 className="text-lg font-fredoka font-bold text-brand-dark mb-2">{r.title}</h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
