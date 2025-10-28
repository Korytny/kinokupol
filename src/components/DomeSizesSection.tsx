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
    description: "Компактный купол для небольших мероприятий",
    capacity_standing: "10-25 человек",
    capacity_seated: "4-16 человек",
    diameter: "3-6м",
    height: "3м",
    area: "6-28 м²",
    projectors: "4 шт - 3К",
    sound: "5/1",
    air_conditioning: "нет",
    assembly_time: "4 часа",
    disassembly_time: "2 часа",
    power_supply: "220В, 4кВт",
    image: "/img/s_dome.png"
  },
  {
    id: "m",
    name: "Купол M",
    description: "Средний купол для мероприятий",
    capacity_standing: "40-140 человек",
    capacity_seated: "20-60 человек",
    diameter: "7-12м",
    height: "4.2-6.5м",
    area: "38-113 м²",
    projectors: "6 шт - от 3 до 4К",
    sound: "5/1",
    air_conditioning: "Есть",
    assembly_time: "6-8 часов",
    disassembly_time: "3 часа",
    power_supply: "380В, 7кВт",
    image: "/img/m_dome.png"
  },
  {
    id: "l",
    name: "Купол L",
    description: "Большой купол для масштабных мероприятий",
    capacity_standing: "160-260 человек",
    capacity_seated: "80-133 человек",
    diameter: "14-16м",
    height: "7.3-8.7м",
    area: "154-201 м²",
    projectors: "8-12 шт - от 4 до 5К",
    sound: "7/1",
    air_conditioning: "Есть",
    assembly_time: "16-24 часа",
    disassembly_time: "8 часов",
    power_supply: "380В, 12кВт",
    image: "/img/l_dome.png"
  },
  {
    id: "xl",
    name: "Купол XL",
    description: "Максимальный купол для крупных событий",
    capacity_standing: "410-1500 человек",
    capacity_seated: "213-700 человек",
    diameter: "21-35м",
    height: "11.5-18.5м",
    area: "346-962 м²",
    projectors: "12-24 шт - от 5 до 6К",
    sound: "7/1",
    air_conditioning: "Есть",
    assembly_time: "32-48 часов",
    disassembly_time: "16 часов",
    power_supply: "380В, 20кВт",
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
                    <span className="text-sm text-purple-100">Вместимость (стоя): {dome.capacity_standing}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-teal-300" />
                    <span className="text-sm text-purple-100">Вместимость (сидя): {dome.capacity_seated}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="h-4 w-4 text-teal-300" />
                    <span className="text-sm text-purple-100">Диаметр: {dome.diameter}, Высота: {dome.height}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-purple-100">Площадь: {dome.area}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-purple-100">Проекторы: {dome.projectors}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-purple-100">Звук: {dome.sound}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-purple-100">Кондиционирование: {dome.air_conditioning}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-purple-100">Монтаж: {dome.assembly_time}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-purple-100">Демонтаж: {dome.disassembly_time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-purple-100">Электропитание: {dome.power_supply}</span>
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
