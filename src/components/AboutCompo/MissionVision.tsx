// import { Target, Eye } from 'lucide-react';

// export default function MissionVision() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
//       <div data-reveal className="glass rounded-3xl p-8">
//         <Target className="text-accent-from mb-4" size={32} />
//         <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tight">Our Mission</h3>
//         <p className="text-gray-400 leading-relaxed">
//           To create meaningful, joyful experiences that reduce stress, build community, and inspire people across corporates, schools, and neighborhoods — one smile at a time.
//         </p>
//       </div>
//       <div data-reveal className="glass rounded-3xl p-8">
//         <Eye className="text-accent-from mb-4" size={32} />
//         <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tight">Our Vision</h3>
//         <p className="text-gray-400 leading-relaxed">
//           To be India's most loved wellness company — where every event is an unforgettable experience that leaves people energized, connected, and smiling.
//         </p>
//       </div>
//     </div>
//   );
// }


import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
      {/* Mission Card */}
      <div data-reveal className="glass rounded-3xl p-8">
        <Target className="text-accent-from mb-4" size={32} />
        <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tight">
          Our Mission
        </h3>
        <p className="text-gray-300 leading-relaxed">
          At <span className="font-semibold text-white">Just Stress Busters (JSB)</span>, our
          mission is to turn stress into smiles.
          <br />
          <br />
          We create meaningful, joy-filled experiences that bring balance,
          laughter, and positive energy back into everyday life—helping
          employees, students, and communities feel lighter, happier, and
          more connected.
        </p>
      </div>

      {/* Vision Card */}
      <div data-reveal className="glass rounded-3xl p-8">
        <Eye className="text-accent-from mb-4" size={32} />
        <h3 className="font-display font-bold text-white text-2xl mb-3 tracking-tight">
          Our Vision
        </h3>
        <p className="text-gray-300 leading-relaxed">
          To build a world where stress doesn’t define our days—
          <span className="font-semibold text-white"> happiness does.</span>
          <br />
          <br />
          We aim to be the leading creators of joyful experiences that make
          every workplace, classroom, and community more vibrant, exciting,
          and full of life.
        </p>
      </div>
    </div>
  );
}