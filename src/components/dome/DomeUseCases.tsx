
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, BookOpen, Film, Landmark, Briefcase, ArrowRight } from "lucide-react";

const DomeUseCases = () => {
  const categories = [
    {
      id: "events",
      title: "Мероприятия",
      description: "Фестивали, выставки, презентации",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      icon: <Calendar className="h-5 w-5 text-teal-300" />
    },
    {
      id: "science",
      title: "Наука",
      description: "Планетарии, научные визуализации",
      image: "https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45",
      icon: <BookOpen className="h-5 w-5 text-teal-300" />
    },
    {
      id: "culture",
      title: "Культура",
      description: "Музеи, выставки, галереи искусства",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      icon: <Landmark className="h-5 w-5 text-teal-300" />
    },
    {
      id: "business",
      title: "Бизнес",
      description: "Корпоративные мероприятия, тренинги",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      icon: <Briefcase className="h-5 w-5 text-teal-300" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">
            Варианты использования
          </h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            Купол L идеально подходит для различных целей благодаря своей вместительности,
            продуманной акустике и качественному проекционному оборудованию.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link to={`/category/${category.id}?size=L`} key={category.id}>
              <Card className="h-full hover-scale overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 hover:border-teal-400/50 transition-colors">
                <div className="relative">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {category.icon}
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-blue-200">{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600 text-white">
                    Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
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

export default DomeUseCases;
