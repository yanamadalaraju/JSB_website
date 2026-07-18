import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    number: "01",
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 2–3 weeks in advance for smaller teams and 4–6 weeks for larger groups. If you're planning during peak seasons (October–February), booking earlier is always better because dates fill quickly. Planning at short notice? Don't worry—we'll still do our best to make it happen.",
  },
  {
    number: "02",
    question: "What group sizes do you handle?",
    answer:
      "From teams of 20 to groups of 1000+, we scale every experience based on your requirements. Whether it's an intimate team bonding session or a large corporate celebration, we've got it covered.",
  },
  {
    number: "03",
    question: "Can activities be done at our office?",
    answer:
      "Absolutely. We bring the complete experience to your workplace—including activities, facilitators, equipment, and setup. Conference room, open area, cafeteria, or office floor—we'll transform your space into an unforgettable experience.",
  },
  {
    number: "04",
    question: "Do you offer customised programs?",
    answer:
      "Yes—and that's what we're known for. From fun engagement activities to leadership workshops, every program is designed specifically around your team's goals, culture, and energy. No generic templates. Ever.",
  },
  {
    number: "05",
    question: "What's included in the cost?",
    answer:
      "Everything needed for a smooth experience is included: Professional facilitators, activity planning, equipment & props, end-to-end coordination, and on-ground execution. Venue and catering can also be included based on your preferences—with complete pricing transparency.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background Blur */}
      <div className="absolute -top-40 left-0 h-80 w-80 rounded-full bg-pink-500/20 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-20 text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-5 py-2 text-sm font-medium text-pink-400">
            <HelpCircle size={18} />
           Still Thinking? Let’s Clear That Up.
          </div>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">

            <span className="bg-gradient-to-r bg-clip-text text-white">
             Everything you need to know 
            </span>

            <br />

            <span className="text-white">
            before planning your team outing
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Everything you need to know before planning your team outing.
            If you still have questions, we're always happy to help.
          </p>

        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <div
              key={faq.number}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-pink-500/30"
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-8 text-left"
              >

                <div className="flex items-center gap-6">

                  {/* Number */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 text-2xl font-bold text-white shadow-lg">
                    {faq.number}
                  </div>

                  {/* Question */}
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {faq.question}
                  </h3>

                </div>

                <ChevronDown
                  className={`text-pink-400 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                  size={28}
                />

              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  active === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >

                <div className="border-t border-white/10 px-8 pb-8 pt-6 md:pl-[110px]">

                  <p className="text-lg leading-8 text-gray-400">
                    {faq.answer}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[32px] border border-white/10 bg-gradient-to-r from-pink-500/10 via-orange-500/10 to-blue-500/10 p-12 text-center backdrop-blur-xl">

          <h3 className="text-3xl font-bold text-white md:text-5xl">
           READY TO ENERGISE 
            <span className="bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              {" "}OUR TEAM?
            </span>
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Join 500+ companies who have transformed their teams with us. Get a custom quote today — it is free!
          </p>

          <button className="mt-10 rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 px-8 py-4 font-semibold text-white transition hover:scale-105">
           Plan your Day out Now →
          </button>

        </div>

      </div>
    </section>
  );
}