import { ArrowRight } from "lucide-react";



const services = [
  {
    title: "Health Camps",
    image:
      "https://juststressbusters.com/wp-content/uploads/2026/01/cor-health-check-up-1024x678.png",
    description:
      "We help organizations build healthier, more productive workplaces through employee wellness programs, health screenings, stress management initiatives, and engagement activities. Our solutions reduce burnout, improve morale, and support long-term performance.",
  },
  {
    title: "Day Out",
    image:
      "https://juststressbusters.com/wp-content/uploads/2026/01/corporate-day-out-2-1024x679.png",
    description:
      "Corporate Day Outs by JSB are designed to break routine, boost energy, and bring teams closer. Through fun games, light competition, and shared experiences, we turn employees into teammates.",
  },
  {
    title: "Corporate Events",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    description:
      "JSB organises marathons, seminars, conferences, themed parties, and carnivals with complete planning and execution. We create engaging experiences that leave a lasting impression.",
  },
  {
    title: "Stress Busters",
    image:
      "https://juststressbusters.com/wp-content/uploads/2026/01/Corporate-Stress-busters-1024x678.png",
    description:
      "Our stress-buster events improve employee morale and engagement. Teams relax, connect, and recharge through fun activities that create happier and more productive workplaces.",
  },
  {
    title: "Corporate Gifting",
    image:
      "https://juststressbusters.com/wp-content/uploads/elementor/thumbs/bg-3-rawltum0gwyc4vxnxq1carjlm9f7jpu3qoau6fhi2c.png",
    description:
      "From festive hampers to customised gifts, we curate thoughtful corporate gifting experiences that employees truly appreciate and remember.",
  },
  {
    title: "Refreshments",
    image:
      "https://juststressbusters.com/wp-content/uploads/elementor/thumbs/Refreshments-rhos02lgdbz4jvnuhmj2xh5jqbmlaik6v98kjx44ia.png",
    description:
      "From healthy snacks to premium refreshments, we keep your team energized throughout the event because a well-fed team enjoys, engages, and performs better.",
  },
];

export default function ServiceCards() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.35em] text-pink-500 font-semibold text-sm">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r bg-clip-text text-white">
              Experiences That
            </span>
            <br />
            <span className="text-white">
              Bring Teams Together
            </span>
          </h2>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:border-pink-500/40 transition duration-500 hover:-translate-y-3"
            >

              {/* Image */}

              <div className="overflow-hidden h-60">

                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-8 line-clamp-5">
                  {service.description}
                </p>

                <button className="inline-flex items-center gap-3 text-white font-semibold rounded-full bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-400 px-6 py-3 hover:gap-5 transition-all">

                  Explore More

                  <ArrowRight size={20} />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}