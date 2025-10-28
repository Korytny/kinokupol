import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[700px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/mainhero.jpg')",
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-start pt-36 items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-title-animation text-white/90 relative">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-teal-400/30 rounded-full blur-md opacity-80"></span>
            <span className="relative z-10">
              КиноСфера
            </span>
          </span>
        </h1>

      </div>
    </section>
  );
};

export default HeroSection;