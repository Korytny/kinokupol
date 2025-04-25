
import React from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          Купольные кинотеатры для ваших идей
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
          Создавайте незабываемые впечатления с помощью современных купольных технологий
        </p>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 w-full max-w-4xl shadow-lg animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Где</label>
              <input 
                type="text" 
                placeholder="Выберите город" 
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-800"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Когда</label>
              <input 
                type="text" 
                placeholder="Выберите даты" 
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-800"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Категория</label>
              <input 
                type="text" 
                placeholder="Выберите категорию" 
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary text-gray-800"
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button className="bg-primary hover:bg-primary/90">
              <Search className="mr-2 h-4 w-4" />
              Найти купол
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
