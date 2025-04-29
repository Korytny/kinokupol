
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroForm from "@/components/HeroForm";
import DomeSizesSection from "@/components/DomeSizesSection";
import UsageCategoriesSection from "@/components/UsageCategoriesSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import EventsSection from "@/components/EventsSection";
import ScienceSection from "@/components/ScienceSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import CultureSection from "@/components/CultureSection";
import BusinessSection from "@/components/BusinessSection";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroForm />
        <EventsSection />
        <ScienceSection />
        <EntertainmentSection />
        <CultureSection />
        <BusinessSection />
        <DomeSizesSection />
        <UsageCategoriesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
