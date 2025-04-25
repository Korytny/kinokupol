
import React from "react";
import { useParams } from "react-router-dom";

const CategoryFeatures: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Особенности категории {category}</h2>
        {/* Features content will be implemented later */}
      </div>
    </section>
  );
};

export default CategoryFeatures;
