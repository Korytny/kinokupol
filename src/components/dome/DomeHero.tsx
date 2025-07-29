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
    <section className="relative h-[600px] overflow-hidden section-dark">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            {domeData.name}
          </h1>
          <p className="text-xl text-purple-100 mb-6">
            {domeData.description}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 mx-auto">
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Building className="h-5 w-5 text-teal-300 mr-2" />
              <span className="text-purple-100">Диаметр: {domeData.diameter}</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Building className="h-5 w-5 text-teal-300 mr-2" />
              <span className="text-purple-100">Высота: {domeData.height}</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Building className="h-5 w-5 text-teal-300 mr-2" />
              <span className="text-purple-100">Вместимость: {domeData.capacity}</span>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white mx-auto">
            Забронировать купол
          </Button>
        </div>
        <div className="bg-gray-700/50 rounded-xl h-96 w-full overflow-hidden border border-white/20">
          <img 
            src={`/img/${domeSize}_dome.png`}
            alt={`Фотография купола ${domeData.name}`}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      </div>
      
    </section>
  );
};

export default DomeHero;
