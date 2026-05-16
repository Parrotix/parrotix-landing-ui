import { useInView } from '../hooks/useInView'

const gameModes = [
  {
    emoji: '🖼️',
    title: 'Picture Match',
    description: 'See a word and pick the right image. Build visual vocabulary the natural way.',
    color: 'from-blue-500 to-cyan-500',
    tag: 'Vocabulary',
  },
  {
    emoji: '🎧',
    title: 'Listen & Choose',
    description: 'Train your ear by listening to native English audio and selecting the correct word.',
    color: 'from-purple-500 to-violet-600',
    tag: 'Listening',
  },
  {
    emoji: '🎤',
    title: 'Speak & Match',
    description: 'Pronounce English words out loud and get instant pronunciation feedback. Train your speaking, not just your typing.',
    color: 'from-pink-500 to-rose-500',
    tag: 'Speaking',
  },
  {
    emoji: '💬',
    title: 'Conversation',
    description: 'Practice real-life dialogues with characters — at a doctor, market, airport & more.',
    color: 'from-green-500 to-teal-500',
    tag: 'Conversation',
  },
  {
    emoji: '🔗',
    title: 'Match Pairs',
    description: 'Test your memory by matching Urdu words to their English translations under time pressure.',
    color: 'from-orange-500 to-amber-500',
    tag: 'Memory',
  },
  {
    emoji: '🖱️',
    title: 'Drag & Drop',
    description: 'Drag words into the right order and build grammatically correct English sentences.',
    color: 'from-yellow-500 to-orange-500',
    tag: 'Grammar',
  },
  {
    emoji: '🚀',
    title: 'Astro Trash',
    description: 'Blast the correct English answer in an arcade space shooter. Reflexes meet vocabulary.',
    color: 'from-indigo-500 to-purple-600',
    tag: 'Arcade',
  },
  {
    emoji: '🎬',
    title: 'Watch & Learn',
    description: 'Watch short videos in context and answer comprehension questions to test understanding.',
    color: 'from-red-500 to-pink-500',
    tag: 'Video',
  },
]

export default function GameModes() {
  const { ref, inView } = useInView()

  return (
    <section
      id="game-modes"
      className="section-padding bg-brand-dark relative overflow-hidden"
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dots pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          className={`section-header transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-purple/20 text-brand-purple rounded-full text-sm font-medium mb-5">
            🎮 Never Get Bored
          </div>
          <h2 className="text-4xl md:text-5xl font-fredoka font-bold text-white mb-5">
            8 Ways to Learn{' '}
            <span className="text-gradient-purple">English</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-inter leading-relaxed">
            Parrotix rotates through 8 game modes so every lesson feels fresh.
            Each mode targets a different skill — vocabulary, listening, speaking, grammar, and more.
          </p>
        </div>

        {/* Game Mode Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {gameModes.map((mode, i) => (
            <div
              key={mode.title}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${i * 80 + 200}ms` }}
            >
              {/* Card */}
              <div className="glass-card rounded-3xl p-6 h-full hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl cursor-default border border-white/8">
                {/* Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-[10px] font-inter font-semibold text-white bg-gradient-to-r ${mode.color} opacity-90`}
                  >
                    {mode.tag}
                  </span>
                </div>

                {/* Emoji icon with gradient bg */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mode.color} flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {mode.emoji}
                </div>

                <h3 className="text-lg font-fredoka font-bold text-white mb-2">
                  {mode.title}
                </h3>
                <p className="text-gray-400 text-xs font-inter leading-relaxed">
                  {mode.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <p className="text-gray-500 font-inter mb-5">All 8 modes unlock with your free account</p>
          <a
            href="#download"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-orange text-white font-semibold rounded-full hover:bg-orange-500 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5 font-inter"
          >
            Try All Game Modes Free →
          </a>
        </div>
      </div>
    </section>
  )
}
