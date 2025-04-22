
import React from "react";
import { Star } from "lucide-react";

export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  rating: number;
  imageUrl: string;
  category: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card hover-scale">
      {/* Property Image */}
      <div className="aspect-square relative overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Property Details */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg line-clamp-1">{property.title}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-current text-airbnb-primary" />
            <span className="ml-1 text-sm">{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm mb-2">{property.location}</p>
        <p className="font-semibold mt-2">
          ${property.price} <span className="font-normal text-gray-500">night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
