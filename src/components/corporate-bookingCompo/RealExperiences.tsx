import {
  MessageCircleHeart,
  Sparkles,
  Trophy,
  HeartHandshake,
} from "lucide-react";

const stories = [
  {
    icon: MessageCircleHeart,
    title: "From Small Talk to Real Connection",
    description:
      "Two colleagues who barely spoke at work—one shared experience changed everything.",
  },
  {
    icon: Sparkles,
    title: "One Team. One Energy. Zero Dull Moments",
    description:
      "500 people. One vibe. What started as an outing turned into a celebration.",
  },
  {
    icon: Trophy,
    title: "Play Together. Win Together. Stay Together",
    description:
      "A little competition sparked laughter, bonding, and unexpected teamwork.",
  },
  {
    icon: HeartHandshake,
    title: "Not Just a Day Out. A Story Your Team Talks About",
    description:
      "What begins as an event ends as memories your team carries back to work.",
  },
];

export default function RealExperiences() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-pink-500 font-semibold text-sm">
            Real Experiences
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r  bg-clip-text text-white">
              MOMENTS YOUR TEAM
            </span>
            <br />
            <span className="text-white">
              WILL NEVER FORGET ABOUT.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
            The best team outings aren't remembered because of the venue.
            They're remembered because of the moments people create together.
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left Cards */}
          <div className="lg:col-span-4 space-y-5">

            {stories.map((story) => {
              const Icon = story.icon;

              return (
                <div
                  key={story.title}
                  className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-pink-500/40 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">

                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 flex items-center justify-center shrink-0">
                      <Icon className="text-white" size={26} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition">
                        {story.title}
                      </h3>

                      <p className="text-gray-400 mt-2 text-sm leading-7">
                        {story.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8">

            <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] backdrop-blur-xl p-10 lg:p-16 h-full">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-medium">
                ✨ Team Stories
              </div>

              <h3 className="mt-8 text-5xl font-bold leading-tight text-white">
                Great Teams
                <br />
                Aren't Built
                <span className="block bg-gradient-to-r from-pink-500 via-orange-500 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                  Inside Meeting Rooms.
                </span>
              </h3>

              <p className="mt-8 text-lg text-gray-400 leading-9 max-w-2xl">
                Every laugh, every challenge, every shared victory creates
                stronger workplace relationships. When colleagues experience
                something unforgettable together, they return as a more
                connected, collaborative, and motivated team.
              </p>

              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">

                <div>
                  <h4 className="text-4xl font-bold text-pink-500">500+</h4>
                  <p className="text-gray-400 mt-2">Happy Teams</p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-orange-400">20K+</h4>
                  <p className="text-gray-400 mt-2">Smiles Created</p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-yellow-400">100%</h4>
                  <p className="text-gray-400 mt-2">Participation</p>
                </div>

                <div>
                  <h4 className="text-4xl font-bold text-blue-500">∞</h4>
                  <p className="text-gray-400 mt-2">Memories</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}