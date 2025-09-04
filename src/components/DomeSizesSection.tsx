import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Users, Building, ArrowRight } from "lucide-react";

const domeSizes = [
  {
    id: "s",
    name: "Купол S",
    description: "Компактный купол для небольших мероприятий до 30 человек",
    capacity: "До 30 человек",
    diameter: "6м",
    height: "3м",
    image: "/img/s_dome.png"
  },
  {
    id: "m",
    name: "Купол M",
    description: "Средний купол для мероприятий до 80 человек",
    capacity: "До 80 человек",
    diameter: "10м",
    height: "5м",
    image: "/img/m_dome.png"
  },
  {
    id: "l",
    name: "Купол L",
    description: "Большой купол для масштабных мероприятий до 200 человек",
    capacity: "До 200 человек",
    diameter: "15м",
    height: "7.5м",
    image: "/img/l_dome.png"
  },
  {
    id: "xl",
    name: "Купол XL",
    description: "Максимальный купол для крупных событий до 350 человек",
    capacity: "До 350 человек",
    diameter: "20м",
    height: "10м",
    image: "/img/xl_dome.png"
  }
];

const DomeSizesSection = () => {
  return (
    <section id="dome-sizes" className="section section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            Размеры куполов
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Выберите идеальный размер купола для вашего мероприятия, от компактного для небольших групп
            до впечатляющего XL-купола для масштабных событий
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domeSizes.map((dome) => (
            <Link to={`/dome/${dome.id}`} key={dome.id}>
              <Card 
                className="h-full hover-scale overflow-hidden border border-white/20 transition-all duration-300"
                style={{
                  backgroundColor: 'rgb(60,40,70)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={dome.image} 
                      alt={dome.name}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-teal-400 to-purple-500 text-white px-3 py-1 rounded-full text-sm">
                    {dome.id.toUpperCase()}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{dome.name}</CardTitle>
                  <CardDescription className="text-purple-200">{dome.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-teal-300" />
                    <span className="text-sm text-purple-100">{dome.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-teal-300" />
                    <span className="text-sm text-purple-100">Диаметр: {dome.diameter}, Высота: {dome.height}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white">
                    Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeSizesSection;
