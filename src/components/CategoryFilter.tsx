
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PartyPopper, Globe, Palmtree, Building, Rocket, Map } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: "all", name: "Все", icon: <Map className="h-5 w-5" /> },
  { id: "events", name: "Мероприятия", icon: <PartyPopper className="h-5 w-5" /> },
  { id: "science", name: "Наука", icon: <Globe className="h-5 w-5" /> },
  { id: "entertainment", name: "Развлечения", icon: <Palmtree className="h-5 w-5" /> },
  { id: "culture", name: "Культура", icon: <Building className="h-5 w-5" /> },
  { id: "brand", name: "Бренды", icon: <Rocket className="h-5 w-5" /> },
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
