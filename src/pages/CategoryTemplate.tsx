
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryHero from "@/components/category/CategoryHero";
import CategoryFeatures from "@/components/category/CategoryFeatures";
import CategoryCaseStudies from "@/components/category/CategoryCaseStudies";
import DomeSizeCards from "@/components/category/DomeSizeCards";

const CategoryTemplate = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <CategoryHero />
        <CategoryFeatures />
        <CategoryCaseStudies />
        <DomeSizeCards />
      </main>
      <Footer />
    </div>
  );
};

export default CategoryTemplate;
