import React from "react";
import { Button } from "@/components/ui/button";
import { GalleryHorizontal } from "lucide-react";

const CultureSection: React.FC = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-teal-300 opacity-10 blur-xl"></div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            Культурные пространства
          </h2>
          <div className="h-px w-24 bg-teal-400/50 mx-auto mb-6"></div>
          <p className="text-xl text-purple-100 leading-relaxed">
            Трансформируйте выставочные пространства в иммерсивные купольные галереи для создания уникального иммерсивного опыта
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-4 text-teal-200 tracking-wide">Музейные экспозиции</h3>
              <p className="text-purple-100 leading-relaxed">
                Создание купольных пространств для музеев с возможностью полного иммерсивного погружения посетителей в исторические эпохи, природные ландшафты или художественные миры. Оживите экспонаты с помощью передовых проекционных технологий.
              </p>
            </div>
            
            <div className="pl-6 border-l-2 border-teal-400/50">
              <blockquote className="text-lg italic text-purple-100">
                "Купольная инсталляция позволила нам создать принципиально новый формат взаимодействия посетителей с экспозицией, многократно увеличив вовлеченность и время пребывания в музее."
              </blockquote>
              <div className="mt-4 text-sm text-purple-200">
                — Анна Михайлова, директор Государственного музея современного искусства
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-light mb-4 text-teal-200 tracking-wide">Галереи и выставки</h3>
              <p className="text-purple-100 leading-relaxed">
                Представьте произведения искусства в новом формате, создавая вокруг зрителя пространство, полностью наполненное художественными образами. Купольные проекции позволяют придать классическому искусству новое измерение.
              </p>
            </div>
            
            <Button className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white">
              Консультация по культурным проектам
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg blur opacity-30"></div>
                <img 
                  src="/img/post3.jpg" 
                  alt="Культурные пространства под куполом КиноСфера" 
                  className="relative w-full h-64 object-cover rounded-lg border border-white/20"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg blur opacity-30"></div>
                <img 
                  src="/img/post4.jpg" 
                  alt="Культурные мероприятия под куполом КиноСфера" 
                  className="relative w-full h-80 object-cover rounded-lg border border-white/20"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <div className="space-y-6 pt-12">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg blur opacity-30"></div>
                <img 
                  src="/img/post5.jpg" 
                  alt="Музейные экспозиции под куполом КиноСфера" 
                  className="relative w-full h-80 object-cover rounded-lg border border-white/20"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg blur opacity-30"></div>
                <img 
                  src="/img/post7.jpg" 
                  alt="Галереи искусств под куполом КиноСфера" 
                  className="relative w-full h-64 object-cover rounded-lg border border-white/20"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div 
          className="rounded-xl p-10 mb-16 border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
          style={{
            backgroundColor: 'rgb(40,20,40)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-light text-teal-200 mb-2">12+</div>
              <div className="text-purple-100">крупных музеев используют наши решения</div>
            </div>
            <div className="p-4 md:border-x border-white/20">
              <div className="text-4xl font-light text-teal-200 mb-2">1.5M</div>
              <div className="text-purple-100">посетителей за последний год</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-light text-teal-200 mb-2">97%</div>
              <div className="text-purple-100">положительных отзывов</div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-light mb-6 text-teal-200 tracking-wide">Временная шкала культурных событий</h3>
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
                  <div className="mr-6 text-lg font-medium text-purple-300 w-16">{event.year}</div>
                  <div>
                    <h4 className="text-lg font-medium text-purple-100 mb-1">{event.title}</h4>
                    <p className="text-purple-200">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white">
                <GalleryHorizontal className="mr-2 h-4 w-4" />
                Каталог культурных проектов
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg blur opacity-30"></div>
              <img 
                src="/img/post6.jpg" 
                alt="Выставка Дали в XIAMEN, CHINA" 
                className="relative w-full h-auto rounded-lg border border-white/20"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/10 backdrop-blur-sm rounded border border-white/20">
                <div className="text-sm text-purple-300">Международный проект</div>
                <div className="text-lg font-medium text-white">Выставка Дали в XIAMEN, CHINA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
