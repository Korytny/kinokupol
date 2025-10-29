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

  const handleBooking = () => {
    const subject = "Подбор купола";
    const body = `Здравствуйте!

Прошу подобрать купол со следующими параметрами:
- Город: ${city || "не указан"}
- Категория: ${category || "не указана"}
- Размер: ${size || "не указан"}

Свяжитесь со мной для дальнейшего обсуждения.
`;
    window.location.href = `mailto:info@kinosfera.pro?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="relative z-10 section section-dark -mt-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200 text-center">
          Создавайте незабываемые впечатления выбрав свой купол
        </h2>
        <div className="bg-slate-900/50 border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="flex flex-col md:col-span-1">
              <label className="text-purple-200 font-medium mb-2 text-left">Ваш город</label>
              <Input
                type="text"
                placeholder="Выберите город"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="bg-slate-800/60 border-white/20 rounded-lg text-white placeholder:text-purple-200/70 focus:ring-2 focus:ring-teal-300/50"
              />
            </div>

            <div className="flex flex-col md:col-span-1">
              <label className="text-purple-200 font-medium mb-2 text-left">Категория</label>
              <Select onValueChange={setCategory} value={category}>
                <SelectTrigger className="bg-slate-800/60 border-white/20 rounded-lg text-white placeholder:text-purple-200/70 focus:ring-2 focus:ring-teal-300/50">
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20 text-white">
                  <SelectItem value="мероприятия">Мероприятия</SelectItem>
                  <SelectItem value="наука">Наука</SelectItem>
                  <SelectItem value="развлечения">Развлечения</SelectItem>
                  <SelectItem value="культура">Культура</SelectItem>
                  <SelectItem value="бизнес">Бизнес</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col md:col-span-1">
              <label className="text-purple-200 font-medium mb-2 text-left">Размер купола</label>
              <Select onValueChange={setSize} value={size}>
                <SelectTrigger className="bg-slate-800/60 border-white/20 rounded-lg text-white placeholder:text-purple-200/70 focus:ring-2 focus:ring-teal-300/50">
                  <SelectValue placeholder="Выберите размер" />
                </SelectTrigger>
                <SelectContent className="bg-slate-800 border-white/20 text-white">
                  <SelectItem value="S">S (5-10 человек)</SelectItem>
                  <SelectItem value="M">M (10-50 человек)</SelectItem>
                  <SelectItem value="L">L (50-100 человек)</SelectItem>
                  <SelectItem value="XL">XL (100-300 человек)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button onClick={handleBooking} className="w-full md:col-span-1 bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white h-10">
              Подобрать купол
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingFormSection;
