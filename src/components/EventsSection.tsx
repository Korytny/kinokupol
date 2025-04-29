
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
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22"
  },
  {
    title: "Выставка Digital Art",
    description: "Проекционные инсталляции современных художников под куполом",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
  },
  {
    title: "Корпоративный форум IT-Tech",
    description: "Презентация новых продуктов компании с эффектом полного погружения",
    imageUrl: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa"
  }
];

const EventsSection: React.FC = () => {
  return (
    <section className="section section-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="section-title text-left">Мероприятия под куполом</h2>
            <p className="text-lg text-slate-600 mb-6 text-left">
              Создайте незабываемые впечатления для ваших гостей с помощью иммерсивных купольных пространств. 
              Идеально подходит для фестивалей, выставок и уникальных событий.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <Calendar className="h-5 w-5 text-[#80dfd5] mr-2" />
                <span>Гибкое планирование</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <Star className="h-5 w-5 text-[#80dfd5] mr-2" />
                <span>Высокая оценка клиентов</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <GalleryHorizontal className="h-5 w-5 text-[#80dfd5] mr-2" />
                <span>Уникальный опыт</span>
              </div>
            </div>
            <Button className="btn-primary">Узнать больше о мероприятиях</Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative glow-border">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30" 
                alt="Мероприятия под куполом" 
                className="rounded-lg w-full h-[400px] object-cover relative" 
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg max-w-[250px] glow-border">
                <div className="relative bg-white p-4 rounded-lg">
                  <div className="text-sm font-medium text-slate-800">Отзыв клиента</div>
                  <p className="text-slate-700 italic">"Невероятный опыт! Наши гости были в восторге от купольного кинотеатра на фестивале."</p>
                  <div className="flex items-center mt-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#80dfd5] fill-[#80dfd5]" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-slate-600">Фестиваль Света, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#80dfd5] to-teal-400">Успешные мероприятия</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventCases.map((caseItem, index) => (
              <div 
                key={index} 
                className="card-light hover-scale"
              >
                <div className="h-48 overflow-hidden rounded-t-xl relative glow-border">
                  <img 
                    src={caseItem.imageUrl} 
                    alt={caseItem.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 relative"
                  />
                </div>
                <div className="p-6 relative bg-white/80 rounded-b-xl">
                  <h4 className="text-xl font-semibold mb-2 text-slate-800">{caseItem.title}</h4>
                  <p className="text-slate-600">{caseItem.description}</p>
                  <Button variant="outline" className="mt-4 w-full btn-outline">
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
