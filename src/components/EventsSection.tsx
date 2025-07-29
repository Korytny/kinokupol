import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Star, GalleryHorizontal } from "lucide-react";

interface EventCase {
  title: string;
  description: string;
  imageUrl: string;
}

const eventCases: EventCase[] = [
  {
    title: "Музыкальный фестиваль «Космофест»",
    description: "Иммерсивное пространство для 500 гостей с объемным звуком и визуализацией",
    imageUrl: "/img/post9.jpg"
  },
  {
    title: "Выставка Digital Art",
    description: "Проекционные инсталляции современных художников под куполом",
    imageUrl: "/img/post10.jpg"
  },
  {
    title: "Корпоративный форум IT-Tech",
    description: "Презентация новых продуктов компании с эффектом полного погружения", 
    imageUrl: "/img/post12.png"
  }
];

const EventsSection: React.FC = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-teal-300 opacity-10 blur-xl"></div>
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200 text-left">
              Мероприятия под куполом
            </h2>
            <p className="text-xl text-purple-100 mb-6 text-left">
              Создайте незабываемые впечатления для ваших гостей с помощью иммерсивных купольных пространств. 
              Идеально подходит для фестивалей, выставок и уникальных событий.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Calendar className="h-5 w-5 text-teal-300 mr-2" />
                <span className="text-purple-100">Гибкое планирование</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Star className="h-5 w-5 text-teal-300 mr-2" />
                <span className="text-purple-100">Высокая оценка клиентов</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <GalleryHorizontal className="h-5 w-5 text-teal-300 mr-2" />
                <span className="text-purple-100">Уникальный опыт</span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-teal-400 to-purple-500 border-0 hover:from-teal-500 hover:to-purple-600">
              Узнать больше о мероприятиях
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-xl blur opacity-50"></div>
                <img 
                  src="/img/post1.jpg" 
                  alt="Мероприятия под куполом КиноКупол" 
                  className="relative rounded-xl w-full h-[400px] object-cover border border-white/20" 
                  loading="lazy"
                  decoding="async"
                />
              <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 max-w-[250px]">
                <div className="relative p-4">
                  <div className="text-sm font-medium text-teal-200">Отзыв клиента</div>
                  <p className="text-purple-100 italic">"Невероятный опыт! Наши гости были в восторге от купольного кинотеатра на фестивале."</p>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-teal-300 fill-teal-300" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-purple-200">Фестиваль Света, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-purple-300">Успешные мероприятия</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventCases.map((caseItem, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 border border-white/20 overflow-hidden"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={caseItem.imageUrl} 
                    alt={caseItem.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2 text-teal-200">{caseItem.title}</h4>
                  <p className="text-purple-100">{caseItem.description}</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full border-teal-300 text-teal-300 hover:bg-teal-300/10"
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
