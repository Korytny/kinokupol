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

const BookingFormSection = () => {
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");

  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center mb-8 text-white">
          Создавайте незабываемые впечатления выбрав свой купол
        </h2>
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 w-full max-w-4xl shadow-lg mx-auto">
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

export default BookingFormSection;
