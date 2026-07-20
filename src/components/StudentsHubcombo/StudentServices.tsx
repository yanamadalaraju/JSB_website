import React from 'react';

const StressBustersLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 font-sans">
     

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-800">Our Signature Programs</h2>
          <p className="mt-2 text-lg text-gray-600">Designed to elevate student well-being and school community engagement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Stress Busters */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-indigo-50 flex flex-col">
            <div className="relative h-52 bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center">
              <span className="text-white text-7xl opacity-80">🧘</span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-20"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">#1 Well-being</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                Stress Busters <span className="text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Interactive</span>
              </h3>
              <p className="mt-3 text-gray-600 flex-grow">
                Interactive stress-buster programs that help students relax, express themselves, and build resilience. Schools benefit from improved student well-being, better attention in class, and a healthier campus culture.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-indigo-600 font-medium">⭐ Improved focus & calm</span>
                <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-1">
                  Explore More <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: School Events */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-indigo-50 flex flex-col">
            <div className="relative h-52 bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center">
              <span className="text-white text-7xl opacity-80">🎭</span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-20"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">Community</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                School Events <span className="text-sm bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Engaging</span>
              </h3>
              <p className="mt-3 text-gray-600 flex-grow">
                We design and execute meaningful school events such as PTMs, Annual Day, Sports Day, festive celebrations, and Graduation Day that strengthen parent engagement and enhance the school's overall brand image.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-indigo-600 font-medium">🏆 Memorable experiences</span>
                <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-1">
                  Explore More <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Day Out */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-indigo-50 flex flex-col">
            <div className="relative h-52 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <span className="text-white text-7xl opacity-80">🌳</span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent h-20"></div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-bold">Adventure</div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                School Day Out <span className="text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Play & Move</span>
              </h3>
              <p className="mt-3 text-gray-600 flex-grow">
                We curate engaging Students' Day Out experiences that blend play, movement, and creativity, helping schools strengthen student bonding while showcasing a vibrant, joyful campus culture.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-indigo-600 font-medium">🌿 Joyful & creative</span>
                <button className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold transition flex items-center gap-1">
                  SIGN ME UP <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Health Camp (full width card below) */}
          <div className="md:col-span-2 lg:col-span-3 bg-white rounded-3xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-indigo-50 flex flex-col md:flex-row">
            <div className="md:w-2/5 h-52 md:h-auto bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center p-6">
              <span className="text-white text-8xl opacity-80">❤️</span>
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-gray-800">Student Health Camp</h3>
                <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">Proactive Care</span>
              </div>
              <p className="text-gray-600 max-w-3xl">
                We conduct student health camps that help schools proactively monitor children's physical and emotional well-being. These camps support early identification of health concerns, reinforce a culture of care, and build trust with parents. By promoting healthier students, schools create a stronger foundation for learning, attendance, and overall performance.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1 text-sm text-gray-700">
                  <span>⭐</span> Early identification
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-700">
                  <span>⭐</span> Parent trust
                </div>
                <button className="ml-auto bg-rose-500 hover:bg-rose-600 text-white font-bold px-6 py-2 rounded-full shadow transition flex items-center gap-2">
                  SIGN ME UP <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    
    </div>
  );
};

export default StressBustersLanding;