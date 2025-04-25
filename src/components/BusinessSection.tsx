
import React from "react";
import { Button } from "@/components/ui/button";
import { Briefcase, ChartBar, DollarSign } from "lucide-react";

interface TestimonialType {
  text: string;
  author: string;
  position: string;
  company: string;
  logo: string;
}

const testimonials: TestimonialType[] = [
  {
    text: "Запуск нашего нового продукта в купольном кинотеатре создал wow-эффект у клиентов и привлек небывалое внимание прессы.",
    author: "Иван Смирнов",
    position: "Директор по маркетингу",
    company: "TechData",
    logo: "TD"
  },
  {
    text: "Корпоративное мероприятие в формате купола позволило нам представить стратегию развития компании в совершенно новом свете.",
    author: "Елена Васильева",
    position: "CEO",
    company: "Global Systems",
    logo: "GS"
  }
];

const BusinessSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          <div className="lg:w-1/2">
            <div className="inline-block mb-4 py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              Бренды и бизнес
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Создайте незабываемые впечатления для ваших бизнес-мероприятий
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Купольные пространства создают уникальную атмосферу для запуска продуктов, корпоративных мероприятий и презентаций бренда, оставляя неизгладимое впечатление у ваших клиентов и партнеров.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6">
                Запросить предложение
              </Button>
              <Button variant="outline" className="border-gray-300">
                Смотреть кейсы
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                <div className="p-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-500">Средний ROI мероприятий</div>
                      <div className="text-3xl font-bold text-gray-900">320%</div>
                    </div>
                    <ChartBar className="h-12 w-12 text-blue-600" />
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
                        className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-full">
                          <div className="flex justify-between items-center mb-1">
                            <div className="font-medium text-gray-900">{item.metric}</div>
                            <div className="text-green-600 font-semibold">{item.value}</div>
                          </div>
                          <div className="text-sm text-gray-500">{item.description}</div>
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
              icon: <Briefcase className="h-6 w-6 text-blue-600" />,
              title: "Запуск продукта",
              description: "Создайте впечатляющую презентацию вашего нового продукта или сервиса в иммерсивной среде, охватывающей все органы чувств",
              features: ["3D-визуализация продукта", "Демонстрация в действии", "Интерактивные презентации"]
            },
            {
              icon: <ChartBar className="h-6 w-6 text-blue-600" />,
              title: "Корпоративные мероприятия",
              description: "Трансформируйте стандартные корпоративные встречи в запоминающиеся события с максимальным вовлечением участников",
              features: ["Командные активности", "Стратегические сессии", "Корпоративное обучение"]
            },
            {
              icon: <DollarSign className="h-6 w-6 text-blue-600" />,
              title: "Маркетинговые акции",
              description: "Проводите маркетинговые кампании, которые выделяются на фоне конкурентов и создают мощный информационный повод",
              features: ["PR-освещение", "Вирусный контент", "Лидогенерация"]
            }
          ].map((card, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-blue-100 p-3 rounded-xl inline-block mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>
              <ul className="space-y-2">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Что говорят наши клиенты</h3>
            <p className="text-gray-600">Отзывы ведущих компаний, использовавших купольные решения</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.company}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </div>
                <p className="italic text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="text-sm font-medium text-gray-900">— {testimonial.author}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-gray-300">
              Смотреть все отзывы
            </Button>
          </div>
        </div>
        
        <div className="bg-blue-700 rounded-xl p-10 text-white">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Готовы создать уникальное бизнес-мероприятие?</h3>
            <p className="text-blue-100 mb-8">
              Наша команда поможет реализовать проект любой сложности, от концепции до полного воплощения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-700 hover:bg-gray-100">
                Запросить консультацию
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-blue-800">
                Скачать презентацию
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
