
import React, { useState, useMemo } from "react";
import PropertyCard, { Property } from "./PropertyCard";

interface PropertyGridProps {
  properties: Property[];
  selectedCategory: string;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ properties, selectedCategory }) => {
  const filteredProperties = useMemo(() => {
    if (selectedCategory === "all") {
      return properties;
    }
    return properties.filter(property => property.category === selectedCategory);
  }, [properties, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Places to Stay</h2>
      
      {filteredProperties.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium text-gray-700">No properties found</h3>
          <p className="text-gray-500 mt-2">Try changing your search criteria</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PropertyGrid;
