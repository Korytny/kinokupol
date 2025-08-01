
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DomeHero from "@/components/dome/DomeHero";
import DomeSpecs from "@/components/dome/DomeSpecs";
import DomeShowcase from "@/components/dome/DomeShowcase";
import DomeUseCases from "@/components/dome/DomeUseCases";
import DomeTestimonials from "@/components/dome/DomeTestimonials";
import DomeCTA from "@/components/dome/DomeCTA";

const DomeSize = () => {
  const { size } = useParams<{ size: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [size]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-kinokupol-brand-dark-purple to-kinokupol-brand-very-dark-purple text-white">
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
