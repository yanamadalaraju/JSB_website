// import heroBanner from "@/assets/hero-banner.png"; // Your banner image

// export default function HeroSection() {
//   return (
//     <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
//       <img
//         src="https://i.pinimg.com/1200x/b0/09/ba/b009ba64416c0aa35e1d6945122b114d.jpg"
//         alt="Hero Banner"
//         className="w-full h-auto object-cover"
//       />
//     </section>
//   );
// }


import heroBanner from "@/assets/hero-banner.png"; // Your banner image

export default function HeroSection() {
  return (
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
      <img
        src="https://i.pinimg.com/1200x/b0/09/ba/b009ba64416c0aa35e1d6945122b114d.jpg"
        alt="Hero Banner"
        className="w-full h-auto object-cover"
      />
      
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
        <span className="text-sm uppercase tracking-widest font-semibold text-yellow-300">
          Our Story
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 max-w-4xl">
          The Happiness Headquarters
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-4 max-w-2xl text-gray-200">
          We're on a mission to make every workspace, school, and community a little less stressed and a lot more joyful.
        </p>
      </div>
    </section>
  );
}