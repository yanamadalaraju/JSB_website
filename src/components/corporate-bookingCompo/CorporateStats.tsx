// import { CORPORATE_STATS } from '../../data';

// export default function CorporateStats() {
//   return (
//     <div data-reveal className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-16">
//       {CORPORATE_STATS.map((s) => (
//         <div key={s.label}>
//           <div className="font-display font-bold gradient-text text-3xl md:text-4xl">{s.value}</div>
//           <div className="eyebrow mt-1">{s.label}</div>
//         </div>
//       ))}
//     </div>
//   );
// }



import { CORPORATE_STATS } from "../../data";

export default function CorporateStats() {
  return (
    <section className="mb-20">
      {/* Heading */}
      <div data-reveal className="text-center mb-10">
        <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight">
          <span className="bg-gradient-to-r bg-clip-text text-white">
            FORGE STRONGER TEAMS:
          </span>
          <br />
          <span className="text-white">UNLEASH POTENTIAL</span>
        </h2>
      </div>

      {/* Stats */}
      <div
        data-reveal
        className="glass rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
      >
        {CORPORATE_STATS.map((s) => (
          <div key={s.label}>
            <div className="font-display font-bold gradient-text text-4xl md:text-5xl">
              {s.value}
            </div>
            <div className="eyebrow mt-2 text-sm md:text-base">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}