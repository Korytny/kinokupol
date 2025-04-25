
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Отзывы клиентов</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Узнайте, что говорят о нас клиенты, которые уже использовали купольные решения КиноКупол
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <p className="italic text-gray-700 mb-4">
                "Организовали корпоративное мероприятие в куполе L. Впечатления превзошли все ожидания, 
                гости были в восторге от формата. Обязательно будем сотрудничать снова!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">Александр Петров</p>
                  <p className="text-sm text-gray-500">CEO, Tech Corp</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <p className="italic text-gray-700 mb-4">
                "Использовали купол M для образовательной программы в школе. Дети были в восторге от 
                иммерсивного опыта, а педагоги отметили высокую эффективность такого формата обучения."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">Мария Иванова</p>
                  <p className="text-sm text-gray-500">Директор школы №123</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border border-gray-200">
            <CardContent className="pt-6">
              <p className="italic text-gray-700 mb-4">
                "Заказывали купол XL для фестиваля. Команда КиноКупол проявила себя как надежный партнер, 
                все было организовано на высшем уровне, несмотря на сжатые сроки."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                <div>
                  <p className="font-medium">Дмитрий Сидоров</p>
                  <p className="text-sm text-gray-500">Организатор фестиваля ArtFest</p>
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

