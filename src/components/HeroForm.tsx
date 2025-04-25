
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroForm = () => {
  const [city, setCity] = useState("");
  const [format, setFormat] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <section className="relative h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          КиноКупол
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
          Создавайте незабываемые впечатления с помощью современных купольных технологий
        </p>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 w-full max-w-4xl shadow-lg animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Ваш город</label>
              <Input 
                type="text" 
                placeholder="Выберите город" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-gray-800"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Формат</label>
              <Input 
                type="text" 
                placeholder="Выберите формат" 
                value={format}
                onChange={(e) => setFormat(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-gray-800"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-gray-800 font-medium mb-1 text-left">Количество гостей</label>
              <Input 
                type="number" 
                placeholder="Введите количество" 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-gray-800"
              />
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Подобрать купол
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroForm;

