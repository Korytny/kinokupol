
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./../ui/button";
import { ArrowRight, Users, Maximize, TrendingUp, Check } from "lucide-react";

const domes = [
  {
    size: "S",
    title: "Купол S",
    diameter: "6-8м",
    capacity: "10-25 чел.",
    image: "/img/s_dome.png",
    features: ["Частные просмотры", "Малые группы", "Эксклюзивные показы"],
  },
  {
    size: "M",
    title: "Купол M",
    diameter: "10-12м",
    capacity: "25-50 чел.",
    image: "/img/m_dome.png",
    features: ["Регулярные сеансы", "Средние группы", "Стандартные программы"],
  },
  {
    size: "L",
    title: "Купол L",
    diameter: "14-16м",
    capacity: "50-100 чел.",
    image: "/img/l_dome.png",
    features: ["Большие мероприятия", "Высокая проходимость", "Премиум-контент"],
  },
  {
    size: "XL",
    title: "Купол XL",
    diameter: "18-20м",
    capacity: "100-200 чел.",
    image: "/img/xl_dome.png",
    features: ["Масштабные шоу", "Максимальная вместимость", "Спецпроекты"],
  }
];

const DomeSizeCards = () => {
  return (
    <section className="section section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            Выберите идеальный размер
          </h2>
          <p className="text-lg text-purple-100 max-w-4xl mx-auto">
            От небольших уютных пространств до впечатляющих павильонов для масштабных событий.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domes.map((dome) => (
            <Card key={dome.size} className="flex flex-col bg-slate-900/50 border-white/20 text-white rounded-2xl overflow-hidden hover:border-teal-300/50 transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-0">
                <div className="p-6">
                  <img src={dome.image} alt={dome.title} className="w-full h-32 object-contain mb-4"/>
                  <h3 className="text-2xl font-bold text-center text-teal-300 mb-2">{dome.title}</h3>
                </div>
                <div className="px-6 pb-6 space-y-4 flex-grow">
                  <div className="flex items-center justify-center text-sm bg-white/10 rounded-full py-1 px-3">
                     <Maximize className="h-4 w-4 mr-2 text-purple-300"/> {dome.diameter}
                     <Users className="h-4 w-4 mr-2 ml-4 text-purple-300"/> {dome.capacity}
                  </div>
                  
                  <ul className="space-y-2 pt-4">
                    {dome.features.map(feature => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-teal-300 mr-2 flex-shrink-0 mt-1"/>
                        <span className="text-purple-100">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 mt-auto">
                <Link to={`/dome/${dome.size.toLowerCase()}`}>
                  <Button className="w-full bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeSizeCards;
