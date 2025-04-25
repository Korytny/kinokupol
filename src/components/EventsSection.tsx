
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
    <section className="py-16 bg-gradient-to-br from-pink-50 to-purple-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4 text-purple-900">Мероприятия под куполом</h2>
            <p className="text-lg text-gray-700 mb-6">
              Создайте незабываемые впечатления для ваших гостей с помощью иммерсивных купольных пространств. 
              Идеально подходит для фестивалей, выставок и уникальных событий.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                <span>Гибкое планирование</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <Star className="h-5 w-5 text-purple-600 mr-2" />
                <span>Высокая оценка клиентов</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-sm">
                <GalleryHorizontal className="h-5 w-5 text-purple-600 mr-2" />
                <span>Уникальный опыт</span>
              </div>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">Узнать больше о мероприятиях</Button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30" 
                alt="Мероприятия под куполом" 
                className="rounded-lg shadow-xl w-full h-[400px] object-cover" 
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg max-w-[250px]">
                <div className="text-sm font-medium text-purple-800">Отзыв клиента</div>
                <p className="text-gray-700 italic">"Невероятный опыт! Наши гости были в восторге от купольного кинотеатра на фестивале."</p>
                <div className="flex items-center mt-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">Фестиваль Света, 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Успешные мероприятия</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventCases.map((caseItem, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={caseItem.imageUrl} 
                    alt={caseItem.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{caseItem.title}</h4>
                  <p className="text-gray-600">{caseItem.description}</p>
                  <Button variant="outline" className="mt-4 w-full border-purple-300 text-purple-700 hover:bg-purple-50">
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
