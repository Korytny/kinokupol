
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const domes = [
  {
    size: "S",
    diameter: "6-8м",
    capacity: "10-25 человек",
    description: "Идеален для небольших мероприятий и частных показов"
  },
  {
    size: "M",
    diameter: "10-12м",
    capacity: "25-50 человек",
    description: "Оптимален для средних групп и регулярных мероприятий"
  },
  {
    size: "L",
    diameter: "14-16м",
    capacity: "50-100 человек",
    description: "Подходит для крупных мероприятий и постоянных инсталляций"
  },
  {
    size: "XL",
    diameter: "18-20м",
    capacity: "100-200 человек",
    description: "Максимальное пространство для масштабных проектов"
  }
];

const DomeSizeCards = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-purple-900">
          Выберите размер купола
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Каждый размер купола предлагает свои уникальные преимущества. Выберите тот,
          который лучше всего подходит для ваших целей.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domes.map((dome) => (
            <Card key={dome.size} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Купол {dome.size}</CardTitle>
                <CardDescription>Диаметр: {dome.diameter}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-purple-900 font-semibold mb-2">{dome.capacity}</p>
                <p className="text-gray-600 mb-6">{dome.description}</p>
                <Link to={`/dome/${dome.size.toLowerCase()}`}>
                  <Button className="w-full">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeSizeCards;
