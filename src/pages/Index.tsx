
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyGrid from "@/components/PropertyGrid";
import Footer from "@/components/Footer";
import { Property } from "@/components/PropertyCard";

// Sample property data
const sampleProperties: Property[] = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    location: "New York, United States",
    price: 120,
    rating: 4.92,
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "apartment"
  },
  {
    id: 2,
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 200,
    rating: 4.85,
    imageUrl: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "cabin"
  },
  {
    id: 3,
    title: "Luxury Villa with Pool",
    location: "Bali, Indonesia",
    price: 350,
    rating: 4.96,
    imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "villa"
  },
  {
    id: 4,
    title: "Beachfront House",
    location: "Malibu, California",
    price: 400,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "house"
  },
  {
    id: 5,
    title: "Boutique Hotel Room",
    location: "Paris, France",
    price: 150,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "hotel"
  },
  {
    id: 6,
    title: "Downtown Loft",
    location: "London, United Kingdom",
    price: 180,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
    category: "apartment"
  },
  {
    id: 7,
    title: "Rustic Country House",
    location: "Tuscany, Italy",
    price: 220,
    rating: 4.95,
    imageUrl: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "house"
  },
  {
    id: 8,
    title: "Lakefront Cabin",
    location: "Lake Tahoe, California",
    price: 250,
    rating: 4.88,
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "cabin"
  }
];

const Index: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <div className="bg-white">
          <CategoryFilter onSelectCategory={handleCategorySelect} />
          <PropertyGrid properties={sampleProperties} selectedCategory={selectedCategory} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
