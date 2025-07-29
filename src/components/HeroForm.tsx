import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroForm = () => {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  return (
    <section className="relative h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/mainhero.jpg')",
        }}
      />

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-start pt-20 items-center text-center text-white [text-shadow:_0_1px_3px_rgba(0,0,0,0.8)]">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in text-white/90 relative">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-teal-400/30 rounded-full blur-md opacity-80"></span>
            <span className="relative z-10 [text-shadow:_0_0_10px_rgba(200,160,255,0.7)]">
              КиноСфера
            </span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in text-[#80dfd5]">
          Создавайте незабываемые впечатления с помощью современных купольных технологий
        </p>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 w-full max-w-4xl shadow-lg animate-fade-in mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-slate-800 font-medium mb-1 text-left">Ваш город</label>
              <Input 
                type="text" 
                placeholder="Выберите город" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80dfd5] text-slate-800 bg-white"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="text-slate-800 font-medium mb-1 text-left">Категория</label>
              <Select onValueChange={setCategory} value={category}>
                <SelectTrigger className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80dfd5] text-slate-800 bg-white">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="мероприятия">Мероприятия</SelectItem>
                  <SelectItem value="наука">Наука</SelectItem>
                  <SelectItem value="развлечения">Развлечения</SelectItem>
                  <SelectItem value="культура">Культура</SelectItem>
                  <SelectItem value="бизнес">Бизнес</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex flex-col">
              <label className="text-slate-800 font-medium mb-1 text-left">Размер купола</label>
              <Select onValueChange={setSize} value={size}>
                <SelectTrigger className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#80dfd5] text-slate-800 bg-white">
                  <SelectValue placeholder="Выберите размер" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="S">S (5-10 человек)</SelectItem>
                  <SelectItem value="M">M (10-50 человек)</SelectItem>
                  <SelectItem value="L">L (50-100 человек)</SelectItem>
                  <SelectItem value="XL">XL (100-300 человек)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="mt-4 flex justify-end">
            <Button className="btn-primary">
              Подобрать купол
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroForm;
