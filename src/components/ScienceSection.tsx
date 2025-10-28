import React from "react";
import { Button } from "@/components/ui/button";
import { AtomIcon, Globe, FlaskConical } from "lucide-react";

const ScienceSection: React.FC = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-teal-300 opacity-10 blur-xl"></div>
        <div className="absolute top-40 right-1/4 w-16 h-16 rounded-full bg-purple-400 opacity-15 blur-lg"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            Наука под куполом
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Превратите сложные научные концепции в захватывающие визуальные путешествия. Идеальное решение для планетариев и образовательных центров.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div 
            className="p-8 rounded-xl transition-all duration-300 border border-white/20 hover:bg-[rgb(60,30,60)]"
            style={{ 
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <Globe className="h-12 w-12 text-teal-300 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-teal-200">Планетарии</h3>
            <p className="text-purple-100">
              Полнокупольные проекции космических пространств и планетарных систем с высокой детализацией и реалистичностью.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">Разрешение проекции</span>
                <span className="text-teal-300">8K</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-purple-200">Угол обзора</span>
                <span className="text-teal-300">360°</span>
              </div>
            </div>
          </div>
          
          <div 
            className="p-8 rounded-xl transition-all duration-300 border border-white/20 hover:bg-[rgb(60,30,60)]"
            style={{ 
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <FlaskConical className="h-12 w-12 text-teal-300 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-teal-200">Научные центры</h3>
            <p className="text-purple-100">
              Интерактивные научные демонстрации, визуализация данных и погружение в микромир с эффектом присутствия.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">Интерактивность</span>
                <span className="text-teal-300">Полная</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-purple-200">Аудитория</span>
                <span className="text-teal-300">До 100 чел.</span>
              </div>
            </div>
          </div>
          
          <div 
            className="p-8 rounded-xl transition-all duration-300 border border-white/20 hover:bg-[rgb(60,30,60)]"
            style={{ 
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <AtomIcon className="h-12 w-12 text-teal-300 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-teal-200">Образование</h3>
            <p className="text-purple-100">
              Образовательные программы для школ и университетов с глубоким погружением в изучаемый материал.
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-200">Образовательный контент</span>
                <span className="text-teal-300">200+ программ</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-purple-200">Возрастные группы</span>
                <span className="text-teal-300">5-99 лет</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-xl blur opacity-50"></div>
            <img 
              src="/img/post11.jpg" 
              alt="Научные программы под куполом КиноСфера" 
              className="relative rounded-xl w-full h-[400px] object-cover border border-white/20"
            />
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold mb-4 text-teal-200">Технические преимущества</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-teal-400/20 p-1.5 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">Система пространственного звука</h4>
                  <p className="text-purple-200">32-канальная звуковая система с точным позиционированием источников звука</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-400/20 p-1.5 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">Лазерные проекторы высокой яркости</h4>
                  <p className="text-purple-200">Яркость 30000 люмен, контрастность 2000:1, глубина цвета 10-bit</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-teal-400/20 p-1.5 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">Специальное программное обеспечение</h4>
                  <p className="text-purple-200">Уникальная система управления контентом для научных демонстраций</p>
                </div>
              </li>
            </ul>
            <Button className="mt-8 bg-gradient-to-r from-teal-400 to-purple-500 border-0 hover:from-teal-500 hover:to-purple-600">
              Запросить техническую спецификацию
            </Button>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2 items-center">
            {['МИФИ', 'Политехнический музей', 'МГУ', 'Сколково', 'РАН'].map((partner, index) => (
              <span key={index} className="px-4 py-2 bg-white/10 rounded-full text-sm">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
