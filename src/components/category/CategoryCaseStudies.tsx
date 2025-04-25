
import React from "react";
import { useParams } from "react-router-dom";

const CategoryCaseStudies: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Примеры проектов {category}</h2>
        {/* Case studies content will be implemented later */}
      </div>
    </section>
  );
};

export default CategoryCaseStudies;
