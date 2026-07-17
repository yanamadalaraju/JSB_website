import React from "react";
import aboutImage from "../assets/images/about-us.jpg"; // Replace with your image path

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              About Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Creating Joy, Reducing Stress,
              <span className="text-orange-500"> One Experience at a Time</span>
            </h2>

            <p className="text-gray-600 text-lg leading-8 mb-6">
              At <strong>Just Stress Busters (JSB)</strong>, we specialize in
              creating fun, engaging, and memorable experiences that help people
              unwind and recharge. From workplaces to classrooms, we bring joy
              through activities like Zumba, group games, music, and
              interactive shows—turning ordinary days into extraordinary ones.
            </p>

            <p className="text-gray-600 text-lg leading-8 mb-8">
              Our mission is simple: to boost happiness, reduce stress, and
              create moments of connection. Whether for corporate employees or
              students, JSB goes the extra mile to spark energy, laughter, and
              lasting memories that make every day brighter.
            </p>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg">
              Let's Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/1200x/81/69/72/8169726d126473b344dae0b23be48465.jpg"
                alt="Just Stress Busters"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Decorative Shape */}
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-orange-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-200 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;