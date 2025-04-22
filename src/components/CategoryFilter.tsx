
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Building, House, Bed, Users, MapPin } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: "all", name: "All", icon: <MapPin className="h-5 w-5" /> },
  { id: "apartment", name: "Apartments", icon: <Building className="h-5 w-5" /> },
  { id: "house", name: "Houses", icon: <House className="h-5 w-5" /> },
  { id: "hotel", name: "Hotels", icon: <Bed className="h-5 w-5" /> },
  { id: "cabin", name: "Cabins", icon: <Home className="h-5 w-5" /> },
  { id: "villa", name: "Villas", icon: <Users className="h-5 w-5" /> },
];

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onSelectCategory }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onSelectCategory(categoryId);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex items-center justify-start gap-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`flex items-center gap-2 rounded-full whitespace-nowrap ${
              activeCategory === category.id 
                ? "bg-airbnb-dark text-white" 
                : "hover:border-gray-900"
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.icon}
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
