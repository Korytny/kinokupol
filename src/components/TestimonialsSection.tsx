
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="section section-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Отзывы клиентов</h2>
          <p className="section-subtitle text-slate-600">
            Узнайте, что говорят о нас клиенты, которые уже использовали купольные решения КиноКупол
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="card-light">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-[#80dfd5] mb-4 opacity-60" />
              <p className="italic text-slate-700 mb-4">
                "Организовали корпоративное мероприятие в куполе L. Впечатления превзошли все ожидания, 
                гости были в восторге от формата. Обязательно будем сотрудничать снова!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 glow-border">
                  <div className="w-10 h-10 rounded-full bg-gray-300 relative"></div>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Александр Петров</p>
                  <p className="text-sm text-slate-500">CEO, Tech Corp</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-light">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-[#80dfd5] mb-4 opacity-60" />
              <p className="italic text-slate-700 mb-4">
                "Использовали купол M для образовательной программы в школе. Дети были в восторге от 
                иммерсивного опыта, а педагоги отметили высокую эффективность такого формата обучения."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 glow-border">
                  <div className="w-10 h-10 rounded-full bg-gray-300 relative"></div>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Мария Иванова</p>
                  <p className="text-sm text-slate-500">Директор школы №123</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-light">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-[#80dfd5] mb-4 opacity-60" />
              <p className="italic text-slate-700 mb-4">
                "Заказывали купол XL для фестиваля. Команда КиноКупол проявила себя как надежный партнер, 
                все было организовано на высшем уровне, несмотря на сжатые сроки."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 glow-border">
                  <div className="w-10 h-10 rounded-full bg-gray-300 relative"></div>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Дмитрий Сидоров</p>
                  <p className="text-sm text-slate-500">Организатор фестиваля ArtFest</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
