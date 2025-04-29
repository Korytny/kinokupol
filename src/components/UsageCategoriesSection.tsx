
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Building, Users, Briefcase, Palette, ArrowRight } from "lucide-react";

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
    icon: Palette
  },
  {
    id: "business",
    name: "Бизнес",
    description: "Корпоративные события, презентации, тренинги",
    icon: Briefcase
  }
];

const UsageCategoriesSection = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Категории использования</h2>
          <p className="section-subtitle text-[#80dfd5]/80">
            Купольные кинотеатры подходят для различных сценариев использования
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {usageCategories.map((category) => (
            <Card key={category.id} className="card-dark">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-[#80dfd5]" />
                </div>
                <CardTitle className="text-[#80dfd5]">{category.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="hover:bg-white/10 text-[#80dfd5]">
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
