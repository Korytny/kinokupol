
import React from "react";
import { Button } from "@/components/ui/button";
import { GalleryHorizontal } from "lucide-react";

const CultureSection: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">Культурные пространства</h2>
          <div className="h-px w-24 bg-gray-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Трансформируйте выставочные пространства в иммерсивные купольные галереи для создания уникального культурного опыта
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-900 tracking-wide">Музейные экспозиции</h3>
              <p className="text-gray-600 leading-relaxed">
                Создание купольных пространств для музеев с возможностью полного погружения посетителей в исторические эпохи, природные ландшафты или художественные миры. Оживите экспонаты с помощью передовых проекционных технологий.
              </p>
            </div>
            
            <div className="pl-6 border-l-2 border-gray-300">
              <blockquote className="text-lg italic text-gray-700">
                "Купольная инсталляция позволила нам создать принципиально новый формат взаимодействия посетителей с экспозицией, многократно увеличив вовлеченность и время пребывания в музее."
              </blockquote>
              <div className="mt-4 text-sm text-gray-500">
                — Анна Михайлова, директор Государственного музея современного искусства
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-4 text-gray-900 tracking-wide">Галереи и выставки</h3>
              <p className="text-gray-600 leading-relaxed">
                Представьте произведения искусства в новом формате, создавая вокруг зрителя пространство, полностью наполненное художественными образами. Купольные проекции позволяют придать классическому искусству новое измерение.
              </p>
            </div>
            
            <Button variant="outline" className="border-gray-300 hover:border-gray-900 text-gray-800">
              Консультация по культурным проектам
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img 
                src="https://images.unsplash.com/photo-1573855619003-97fb7d1b5f5b" 
                alt="Культурная экспозиция" 
                className="w-full h-64 object-cover rounded"
              />
              <img 
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e" 
                alt="Выставочное пространство" 
                className="w-full h-80 object-cover rounded"
              />
            </div>
            <div className="space-y-6 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b" 
                alt="Музейная инсталляция" 
                className="w-full h-80 object-cover rounded"
              />
              <img 
                src="https://images.unsplash.com/photo-1594388579998-7c3514e9ecea" 
                alt="Галерея искусств" 
                className="w-full h-64 object-cover rounded"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-10 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-light text-gray-800 mb-2">12+</div>
              <div className="text-gray-600">крупных музеев используют наши решения</div>
            </div>
            <div className="p-4 md:border-x border-gray-200">
              <div className="text-4xl font-light text-gray-800 mb-2">1.5M</div>
              <div className="text-gray-600">посетителей за последний год</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-light text-gray-800 mb-2">97%</div>
              <div className="text-gray-600">положительных отзывов</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-light mb-6 text-gray-900 tracking-wide">Временная шкала культурных событий</h3>
            <div className="space-y-8">
              {[
                {
                  year: "2023",
                  title: "Выставка «Импрессионисты 360°»",
                  description: "Купольная экспозиция работ французских импрессионистов с эффектом присутствия внутри картины"
                },
                {
                  year: "2024",
                  title: "Фестиваль медиаискусства «Погружение»",
                  description: "Международный фестиваль современного цифрового искусства в купольном формате"
                },
                {
                  year: "2024",
                  title: "Историческая реконструкция «Древняя Греция»",
                  description: "Образовательный проект с воссозданием архитектуры и быта древнегреческих полисов"
                }
              ].map((event, index) => (
                <div key={index} className="flex">
                  <div className="mr-6 text-lg font-medium text-gray-400 w-16">{event.year}</div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-800 mb-1">{event.title}</h4>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                <GalleryHorizontal className="mr-2 h-4 w-4" />
                Каталог культурных проектов
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/5 to-gray-900/30 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984" 
                alt="Культурная экспозиция" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-sm rounded">
                <div className="text-sm text-gray-500">Текущий проект</div>
                <div className="text-lg font-medium">Выставка современного искусства «Метаморфозы»</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
