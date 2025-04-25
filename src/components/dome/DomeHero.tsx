
import React from "react";
import { Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const DomeHero = () => {
  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-purple-900">
            Купол L
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            Идеальное решение для масштабных мероприятий до 200 гостей
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full">
              <Building className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-900">Диаметр: 15м</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full">
              <Building className="h-5 w-5 text-purple-600 mr-2" />
              <span className="text-purple-900">Высота: 7.5м</span>
            </div>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Забронировать купол
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DomeHero;
