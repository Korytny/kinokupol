
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyGrid from "@/components/PropertyGrid";
import EventsSection from "@/components/EventsSection";
import ScienceSection from "@/components/ScienceSection";
import EntertainmentSection from "@/components/EntertainmentSection";
import CultureSection from "@/components/CultureSection";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";
import { Property } from "@/components/PropertyCard";

const sampleProperties: Property[] = [
  {
    id: 1,
    title: "Купольный кинотеатр для фестивалей",
    location: "Москва, Россия",
    price: 50000,
    rating: 4.92,
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    category: "events"
  },
  {
    id: 2,
    title: "Мобильный планетарий",
    location: "Санкт-Петербург, Россия",
    price: 35000,
    rating: 4.85,
    imageUrl: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    category: "science"
  },
  {
    id: 3,
    title: "Развлекательный купол",
    location: "Сочи, Россия",
    price: 45000,
    rating: 4.96,
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "entertainment"
  },
  {
    id: 4,
    title: "Выставочный купольный зал",
    location: "Казань, Россия",
    price: 40000,
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1473177104440-ffee2f376098",
    category: "culture"
  },
  {
    id: 5,
    title: "Купол для презентации бренда",
    location: "Екатеринбург, Россия",
    price: 55000,
    rating: 4.7,
    imageUrl: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
    category: "brand"
  },
  {
    id: 6,
    title: "Туристический купольный комплекс",
    location: "Владивосток, Россия",
    price: 60000,
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
    category: "events"
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
          
          {/* Category specific sections */}
          <EventsSection />
          <ScienceSection />
          <EntertainmentSection />
          <CultureSection />
          <BusinessSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
