import { useState } from "react";
import {
  ChevronDown,
  Sparkles,
  Settings2,
  CalendarCheck2,
  Users,
  BadgeCheck,
  TrendingUp,
  Quote,
} from "lucide-react";

const reasons = [
  {
    title: "Fully Customised Experiences",
    content:
      "Every outing is tailored to your team size, goals, and company culture—so it actually fits your people.",
  },
  {
    title: "End-to-End Planning & Execution",
    content:
      "From venue and activities to food, logistics, and flow—we handle everything while you simply show up and enjoy.",
  },
  {
    title: "Engaging Team-Building Activities",
    content:
      "No awkward silences or forced participation. Our activities are designed to engage even the quietest members and bring teams together naturally.",
  },
  {
    title: "One Point of Contact. Complete Clarity.",
    content:
      "No chasing vendors. No confusion. A dedicated coordinator ensures everything runs smoothly from planning to execution.",
  },
  {
    title: "Outcomes That Go Beyond 'Just Fun'",
    content:
      "Stronger collaboration. Better communication. Happier teams. Because a great outing should actually impact how your team works together.",
  },
];

const icons = [
  Sparkles,
  CalendarCheck2,
  Users,
  Settings2,
  TrendingUp,
];

export default function WhyChooseJSB() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 left-0 w-80 h-80 bg-pink-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.35em] text-pink-500 font-semibold text-sm">
            Why Teams Choose
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r  bg-clip-text text-white">
              JSB
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-pink-400 font-medium mb-8">
              <BadgeCheck size={18} />
              Why We're Different
            </div>

            <h3 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Team Outings
              <br />

              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                That Actually Matter.
              </span>
            </h3>

            <p className="text-lg text-gray-400 leading-9 mt-8">
              Most team outings are forgettable. Poor planning, low engagement,
              and wasted budgets often leave employees disconnected instead of
              inspired.
            </p>

            <p className="text-lg text-gray-400 leading-9 mt-6">
              At <span className="text-white font-semibold">JSB</span>, we
              design experiences that bring teams together and leave people
              talking about them long after the day ends. While your team enjoys
              every moment, you don't have to manage a single detail.
            </p>

           

          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-5">

            {reasons.map((item, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpen(open === index ? -1 : index)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 flex items-center justify-center">
                        <Icon size={22} className="text-white" />
                      </div>

                      <h3 className="font-semibold text-white text-lg">
                        {item.title}
                      </h3>

                    </div>

                    <ChevronDown
                      size={22}
                      className={`text-pink-400 transition-transform duration-300 ${
                        open === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      open === index
                        ? "max-h-60 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="px-6 pb-6 pl-22 text-gray-400 leading-8">
                      {item.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-24">

          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-blue-500/10 backdrop-blur-xl px-10 py-14 text-center">

            <Quote
              className="mx-auto mb-6 text-pink-400"
              size={48}
            />

            <h3 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-4xl mx-auto">
              “Planning a team outing
              <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                {" "}shouldn't feel like work...
              </span>
              <br />
              Let's make it effortless.”
            </h3>

          

          </div>

        </div>

      </div>
    </section>
  );
}