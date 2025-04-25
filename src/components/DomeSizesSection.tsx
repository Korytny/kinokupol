
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
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "m",
    name: "Купол M",
    description: "Средний купол для мероприятий до 80 человек",
    capacity: "До 80 человек",
    diameter: "10м",
    height: "5м",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: "l",
    name: "Купол L",
    description: "Большой купол для масштабных мероприятий до 200 человек",
    capacity: "До 200 человек",
    diameter: "15м",
    height: "7.5м",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  },
  {
    id: "xl",
    name: "Купол XL",
    description: "Максимальный купол для крупных событий до 350 человек",
    capacity: "До 350 человек",
    diameter: "20м",
    height: "10м",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098"
  }
];

const DomeSizesSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Размеры куполов</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Выберите идеальный размер купола для вашего мероприятия, от компактного для небольших групп
            до впечатляющего XL-купола для масштабных событий
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {domeSizes.map((dome) => (
            <Link to={`/dome/${dome.id}`} key={dome.id}>
              <Card className="hover:shadow-lg transition-shadow overflow-hidden h-full hover-scale">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={dome.image} 
                      alt={dome.name}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                    {dome.id.toUpperCase()}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{dome.name}</CardTitle>
                  <CardDescription>{dome.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-600">{dome.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-gray-600">Диаметр: {dome.diameter}, Высота: {dome.height}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
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

