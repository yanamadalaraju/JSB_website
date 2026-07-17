import React from "react";

const clients = [
  "https://juststressbusters.com/wp-content/uploads/2025/10/3.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/2.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/1q.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/7.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/6.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/5.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/8-1.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/12-1.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/4.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/10-1.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/9-1.png",
  "https://juststressbusters.com/wp-content/uploads/2025/10/11-1.png",
];

const OurClients = () => {
  return (
    <section className="bg-[#111111] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-white uppercase">
          OUR CLIENTS
        </h2>

        <p className="text-orange-500 uppercase tracking-[4px] text-xl mt-4 mb-12">
          WITH SUCCESS STORIES
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-gray-800">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="border border-gray-800 p-8 h-40 flex items-center justify-center hover:bg-[#1a1a1a] transition"
            >
              <div className="bg-white w-full h-20 flex items-center justify-center px-6">
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-14 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;