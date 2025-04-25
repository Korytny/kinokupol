
import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad, PartyPopper, Theater } from "lucide-react";

interface EntertainmentOption {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const entertainmentOptions: EntertainmentOption[] = [
  {
    title: "Детские шоу",
    icon: <PartyPopper className="h-6 w-6" />,
    color: "bg-orange-500",
    description: "Интерактивные программы для детей с анимацией и спецэффектами"
  },
  {
    title: "Развлекательные программы",
    icon: <Theater className="h-6 w-6" />,
    color: "bg-pink-500",
    description: "Шоу-программы для всей семьи с элементами театрализации"
  },
  {
    title: "Игровые симуляции",
    icon: <Gamepad className="h-6 w-6" />,
    color: "bg-green-500",
    description: "Иммерсивные игровые миры с эффектом полного присутствия"
  }
];

const EntertainmentSection: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Fun wave design at the top */}
        <div className="relative h-20 mb-8">
          <div className="absolute w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-yellow-300"
              ></path>
            </svg>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-yellow-600">
            Развлечения под куполом
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Удивите ваших посетителей незабываемыми развлекательными программами в атмосфере полного погружения
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
              alt="Развлекательное шоу под куполом" 
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg transform rotate-3 w-40 md:w-64">
              <div className="text-2xl font-bold text-yellow-500">98%</div>
              <div className="text-sm">посетителей рекомендуют купольные развлечения друзьям</div>
            </div>
            <div className="absolute -top-5 -left-5 bg-white p-4 rounded-xl shadow-lg transform -rotate-3 w-40 md:w-64">
              <div className="text-2xl font-bold text-pink-500">+38%</div>
              <div className="text-sm">рост посещаемости развлекательных центров</div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-100 p-8 rounded-2xl h-full">
              <h3 className="text-3xl font-bold mb-6 text-orange-600">Развлекательные программы</h3>
              
              <div className="space-y-6">
                {entertainmentOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 flex items-start"
                  >
                    <div className={`${option.color} p-3 rounded-xl text-white mr-4`}>
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">{option.title}</h4>
                      <p className="text-gray-600">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white w-full py-6 rounded-xl">
                  <PartyPopper className="mr-2 h-5 w-5" />
                  Забронировать развлекательную программу
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Как это работает</h3>
          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-300 top-0"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 relative">
              {[
                { 
                  title: "Подготовка", 
                  description: "Мы подбираем оптимальное расположение купола и готовим техническое оснащение",
                  icon: "🛠️",
                  position: "left"
                },
                { 
                  title: "Установка", 
                  description: "Быстрый монтаж купола и настройка всех систем занимает всего 3-4 часа",
                  icon: "🏗️",
                  position: "right"
                },
                { 
                  title: "Проведение", 
                  description: "Наши специалисты обеспечивают бесперебойную работу всего оборудования",
                  icon: "🎮",
                  position: "left"
                },
                { 
                  title: "Демонтаж", 
                  description: "После мероприятия мы быстро и аккуратно демонтируем все оборудование",
                  icon: "✅",
                  position: "right"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center">
                  <div className={`w-5/12 ${item.position === 'right' ? 'invisible' : ''}`}>
                    {item.position === 'left' && (
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-bold mb-2 text-yellow-600">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500 text-white shadow-lg">
                    {item.icon}
                  </div>
                  
                  <div className={`w-5/12 ${item.position === 'left' ? 'invisible' : ''}`}>
                    {item.position === 'right' && (
                      <div className="bg-white p-6 rounded-xl shadow-lg">
                        <h4 className="text-xl font-bold mb-2 text-yellow-600">{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EntertainmentSection;
