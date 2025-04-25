
import React from "react";
import { useParams } from "react-router-dom";
import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";

// Dome sizes data
const domeSizesData = {
  s: {
    name: "Купол S",
    description: "Компактное решение для небольших мероприятий до 30 человек",
    diameter: "6м",
    height: "3м",
    capacity: "До 30 человек"
  },
  m: {
    name: "Купол M",
    description: "Оптимальный выбор для средних групп до 80 человек",
    diameter: "10м",
    height: "5м",
    capacity: "До 80 человек"
  },
  l: {
    name: "Купол L",
    description: "Идеальное решение для масштабных мероприятий до 200 гостей",
    diameter: "15м",
    height: "7.5м",
    capacity: "До 200 человек"
  },
  xl: {
    name: "Купол XL",
    description: "Максимальное пространство для крупных событий до 350 человек",
    diameter: "20м",
    height: "10м",
    capacity: "До 350 человек"
  }
};

const DomeHero = () => {
  const { size } = useParams<{ size: string }>();
  const domeSize = size?.toLowerCase() || "l";
  const domeData = domeSizesData[domeSize as keyof typeof domeSizesData] || domeSizesData.l;

  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-900">
            {domeData.name}
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            {domeData.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full">
              <Building className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-900">Диаметр: {domeData.diameter}</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full">
              <Building className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-900">Высота: {domeData.height}</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full">
              <Building className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-900">Вместимость: {domeData.capacity}</span>
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Забронировать купол
          </Button>
        </div>
      </div>
      
      {/* Background visual effect */}
      <div className="absolute -bottom-10 left-0 right-0 h-40 bg-white transform skew-y-3"></div>
    </section>
  );
};

export default DomeHero;
