
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DomeHero from "@/components/dome/DomeHero";
import DomeSpecs from "@/components/dome/DomeSpecs";
import DomeShowcase from "@/components/dome/DomeShowcase";
import DomeUseCases from "@/components/dome/DomeUseCases";
import DomeTestimonials from "@/components/dome/DomeTestimonials";
import DomeCTA from "@/components/dome/DomeCTA";

const DomeSize = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DomeHero />
        <DomeSpecs />
        <DomeShowcase />
        <DomeUseCases />
        <DomeTestimonials />
        <DomeCTA />
      </main>
      <Footer />
    </div>
  );
};

export default DomeSize;
