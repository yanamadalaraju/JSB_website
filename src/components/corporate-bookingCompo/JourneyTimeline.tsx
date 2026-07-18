// import {
//   Sunrise,
//   Landmark,
//   Drum,
//   Coffee,
//   Music,
//   Gamepad2,
//   Users,
//   CupSoda,
//   UtensilsCrossed,
//   MoonStar,
// } from "lucide-react";

// const journey = [
//   {
//     icon: Landmark,
//     title: "Welcome Arch & Brand Entry",
//     tag: "Grand Entry",
//     description:
//       "Set the tone from the moment your team arrives—with a grand, energetic welcome that builds excitement instantly.",
//   },
//   {
//     icon: Drum,
//     title: "Dollu Kunitha Performance",
//     tag: "Cultural Show",
//     description:
//       "A high-energy cultural performance that creates a memorable and vibrant experience.",
//   },
//   {
//     icon: Coffee,
//     title: "Breakfast & Welcome Drinks",
//     tag: "Catering",
//     description:
//       "Start the day right with a refreshing spread that energizes your team and sets a positive mood.",
//   },
//   {
//     icon: Music,
//     title: "Live Band Performance",
//     tag: "Entertainment",
//     description:
//       "Set the vibe with music that keeps your team engaged and entertained throughout the day.",
//   },
//   {
//     icon: Gamepad2,
//     title: "Carnival Games",
//     tag: "Fun Zone",
//     description:
//       "Fun, interactive games that break the ice and get everyone actively involved from the start.",
//   },
//   {
//     icon: Users,
//     title: "Team Building Games",
//     tag: "Team Building",
//     description:
//       "Structured activities designed to improve communication, collaboration, and team bonding.",
//   },
//   {
//     icon: CupSoda,
//     title: "Hi-Tea",
//     tag: "Catering",
//     description:
//       "A quick recharge to keep energy levels high and conversations flowing.",
//   },
//   {
//     icon: UtensilsCrossed,
//     title: "Lunch",
//     tag: "Catering",
//     description:
//       "A well-curated meal that brings your team together in a relaxed and enjoyable setting.",
//   },
//   {
//     icon: MoonStar,
//     title: "Resort Games & DJ Night",
//     tag: "Grand Finale",
//     description:
//       "Unwind, celebrate, and let your team truly connect. From fun resort activities to an energetic DJ night, this is where memories are made.",
//   },
// ];

// export default function JourneyTimeline() {
//   return (
//     <section className="py-24 relative overflow-hidden">

//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-5">
//             <Sunrise size={18} />
//             In-Office Experience
//           </div>

//           <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
//             <span className="bg-gradient-to-r  bg-clip-text text-white">
//               A Day Crafted From
//             </span>
//             <br />
//             <span className="text-white">
//               Morning to Midnight
//             </span>
//           </h2>

//           <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
//             Every moment is planned, every detail managed. You just show up —
//             we make it unforgettable.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Center Line */}
//           <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full rounded-full bg-gradient-to-b from-pink-500 via-orange-400 to-blue-500"></div>

//           <div className="space-y-14">

//             {journey.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.title}
//                   className={`relative flex flex-col lg:flex-row items-center ${
//                     index % 2 === 0 ? "" : "lg:flex-row-reverse"
//                   }`}
//                 >
//                   {/* Card */}
//                   <div className="w-full lg:w-5/12">

//                     <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-pink-500/40 hover:scale-[1.02] transition-all duration-300">

//                       <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 flex items-center justify-center mb-6">
//                         <Icon size={30} className="text-white" />
//                       </div>

//                       <span className="inline-block text-xs uppercase tracking-wider bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full mb-4">
//                         {item.tag}
//                       </span>

//                       <h3 className="text-2xl font-bold text-white mb-4">
//                         {item.title}
//                       </h3>

//                       <p className="text-gray-400 leading-relaxed">
//                         {item.description}
//                       </p>

//                     </div>

//                   </div>

//                   {/* Timeline Dot */}
//                   <div className="hidden lg:flex w-2/12 justify-center">
//                     <div className="w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-blue-500 border-4 border-black shadow-xl"></div>
//                   </div>

//                   <div className="hidden lg:block w-5/12"></div>

//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import {
  Sunrise,
  Landmark,
  Drum,
  Coffee,
  Music,
  Gamepad2,
  Users,
  CupSoda,
  UtensilsCrossed,
  MoonStar,
} from "lucide-react";

const journey = [
  {
    icon: Landmark,
    title: "Welcome Arch & Brand Entry",
    tag: "Grand Entry",
    description:
      "Set the tone from the moment your team arrives—with a grand, energetic welcome that builds excitement instantly.",
  },
  {
    icon: Drum,
    title: "Dollu Kunitha Performance",
    tag: "Cultural Show",
    description:
      "A high-energy cultural performance that creates a memorable and vibrant experience.",
  },
  {
    icon: Coffee,
    title: "Breakfast & Welcome Drinks",
    tag: "Catering",
    description:
      "Start the day right with a refreshing spread that energizes your team and sets a positive mood.",
  },
  {
    icon: Music,
    title: "Live Band Performance",
    tag: "Entertainment",
    description:
      "Set the vibe with music that keeps your team engaged and entertained throughout the day.",
  },
  {
    icon: Gamepad2,
    title: "Carnival Games",
    tag: "Fun Zone",
    description:
      "Fun, interactive games that break the ice and get everyone actively involved from the start.",
  },
  {
    icon: Users,
    title: "Team Building Games",
    tag: "Team Building",
    description:
      "Structured activities designed to improve communication, collaboration, and team bonding.",
  },
  {
    icon: CupSoda,
    title: "Hi-Tea",
    tag: "Catering",
    description:
      "A quick recharge to keep energy levels high and conversations flowing.",
  },
  {
    icon: UtensilsCrossed,
    title: "Lunch",
    tag: "Catering",
    description:
      "A well-curated meal that brings your team together in a relaxed and enjoyable setting.",
  },
  {
    icon: MoonStar,
    title: "Resort Games & DJ Night",
    tag: "Grand Finale",
    description:
      "Unwind, celebrate, and let your team truly connect. From fun resort activities to an energetic DJ night, this is where memories are made.",
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* animated gradient background orbs */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-5 backdrop-blur-sm">
            <Sunrise size={18} className="text-pink-400" />
            In-Office Experience
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
              A Day Crafted From
            </span>
            <br />
            <span className="text-white">Morning to Midnight</span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-lg">
            Every moment is planned, every detail managed. You just show up —
            we make it unforgettable.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line with glow */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full rounded-full bg-gradient-to-b from-pink-500 via-orange-400 to-blue-500 shadow-[0_0_15px_rgba(236,72,153,0.4)]" />

          <div className="space-y-14">
            {journey.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? "lg:pr-8" : "lg:pl-8"}`}>
                    <div className="group relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-pink-500/40 hover:scale-[1.02] hover:bg-white/10 hover:shadow-2xl hover:shadow-pink-500/10">
                      {/* Card glow on hover */}
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/0 via-orange-400/0 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-shadow duration-300">
                          <Icon size={30} className="text-white" />
                        </div>

                        <span className="inline-block text-xs uppercase tracking-wider bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full mb-4 border border-pink-500/10">
                          {item.tag}
                        </span>

                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-400 group-hover:to-yellow-300 group-hover:bg-clip-text transition-all duration-300">
                          {item.title}
                        </h3>

                        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot with pulse */}
                  <div className="hidden lg:flex w-2/12 justify-center relative">
                    <div className="absolute w-12 h-12 rounded-full bg-pink-500/20 animate-ping" />
                    <div className="relative w-7 h-7 rounded-full bg-gradient-to-r from-pink-500 via-orange-400 to-blue-500 border-4 border-black shadow-xl shadow-pink-500/20" />
                  </div>

                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}