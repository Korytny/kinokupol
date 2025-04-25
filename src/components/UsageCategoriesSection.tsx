
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Building, Users, ArrowRight } from "lucide-react";

const usageCategories = [
  {
    id: "events",
    name: "Мероприятия",
    description: "Выставки, презентации, фестивали и праздники",
    icon: Calendar
  },
  {
    id: "science",
    name: "Наука",
    description: "Планетарии, научные визуализации, образовательные программы",
    icon: Building
  },
  {
    id: "entertainment",
    name: "Развлечения",
    description: "Кинопоказы, шоу, игры и аттракционы",
    icon: Users
  },
  {
    id: "culture",
    name: "Культура",
    description: "Музеи, художественные галереи, исторические выставки",
    icon: Building
  },
  {
    id: "business",
    name: "Бизнес",
    description: "Корпоративные события, презентации, тренинги",
    icon: Building
  }
];

const UsageCategoriesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Категории использования</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Купольные кинотеатры подходят для различных сценариев использования
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {usageCategories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow hover-scale">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="hover:bg-purple-50 hover:text-purple-600">
                  Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageCategoriesSection;

