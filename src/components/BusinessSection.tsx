import React from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, ChartBar, DollarSign } from "lucide-react";

const BusinessSection: React.FC = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-teal-300 opacity-10 blur-xl"></div>
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 py-1 px-3 bg-teal-400/20 text-teal-200 rounded-full text-sm font-medium">
              Бренды и бизнес
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200 leading-tight">
              Создайте незабываемые впечатления для ваших бизнес-мероприятий
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Купольные пространства создают уникальную атмосферу для запуска продуктов, корпоративных мероприятий и презентаций бренда, оставляя неизгладимое впечатление у ваших клиентов и партнеров.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white px-6">
                Запросить предложение
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Смотреть кейсы
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-lg blur opacity-30"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20">
                <div className="p-1 bg-gradient-to-r from-teal-400 to-purple-500"></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <div className="text-sm text-purple-300">Средний ROI мероприятий</div>
                      <div className="text-3xl font-bold text-white">320%</div>
                    </div>
                    <ChartBar className="h-12 w-12 text-teal-300" />
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { 
                        metric: "Охват аудитории", 
                        value: "+175%", 
                        description: "По сравнению с традиционными форматами" 
                      },
                      { 
                        metric: "Вовлеченность", 
                        value: "+230%", 
                        description: "Время контакта с брендом" 
                      },
                      { 
                        metric: "Узнаваемость", 
                        value: "+85%", 
                        description: "Запоминаемость ключевых сообщений" 
                      }
                    ].map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-1">
                            <div className="font-medium text-white">{item.metric}</div>
                            <div className="text-teal-300 font-semibold">{item.value}</div>
                          </div>
                          <div className="text-sm text-purple-200">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Briefcase className="h-6 w-6 text-teal-300" />,
              title: "Запуск продукта",
              description: "Создайте впечатляющую презентацию вашего нового продукта или сервиса в иммерсивной среде, охватывающей все органы чувств",
              features: ["Объёмная визуализация продукта", "Демонстрация в действии", "Интерактивные презентации"]
            },
            {
              icon: <ChartBar className="h-6 w-6 text-teal-300" />,
              title: "Корпоративные мероприятия",
              description: "Трансформируйте стандартные корпоративные встречи в запоминающиеся события с максимальным вовлечением участников",
              features: ["Командные активности", "Стратегические сессии", "Корпоративное обучение"]
            },
            {
              icon: <DollarSign className="h-6 w-6 text-teal-300" />,
              title: "Маркетинговые акции",
              description: "Проводите маркетинговые кампании, которые выделяются на фоне конкурентов и создают мощный информационный повод",
              features: ["PR-освещение", "Вирусный контент", "Лидогенерация"]
            }
          ].map((card, index) => (
            <div 
              key={index} 
              className="rounded-xl p-8 border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
              style={{
                backgroundColor: 'rgb(40,20,40)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div className="bg-teal-400/20 p-3 rounded-xl inline-block mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{card.title}</h3>
              <p className="text-purple-100 mb-6">{card.description}</p>
              <ul className="space-y-2">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-purple-200">
                    <svg className="h-5 w-5 text-teal-300 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default BusinessSection;
