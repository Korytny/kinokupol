import React from "react";
import { ArrowRight } from "lucide-react";

const DomeSpecs = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
          Технические характеристики
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            className="rounded-xl p-6 border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-teal-200">Размеры</h3>
            <ul className="space-y-2 text-purple-100">
              <li className="flex justify-between">
                <span>Диаметр:</span>
                <span className="font-medium">15 метров</span>
              </li>
              <li className="flex justify-between">
                <span>Высота:</span>
                <span className="font-medium">7.5 метров</span>
              </li>
              <li className="flex justify-between">
                <span>Площадь:</span>
                <span className="font-medium">176.7 м²</span>
              </li>
              <li className="flex justify-between">
                <span>Вместимость:</span>
                <span className="font-medium">до 200 человек</span>
              </li>
            </ul>
          </div>

          <div 
            className="rounded-xl p-6 border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-teal-200">Оборудование</h3>
            <ul className="space-y-2 text-purple-100">
              <li className="flex justify-between">
                <span>Проекторы:</span>
                <span className="font-medium">6 x 4K</span>
              </li>
              <li className="flex justify-between">
                <span>Звуковая система:</span>
                <span className="font-medium">Объемный звук 7.1</span>
              </li>
              <li className="flex justify-between">
                <span>Кондиционирование:</span>
                <span className="font-medium">Встроенная система</span>
              </li>
              <li className="flex justify-between">
                <span>Сидения:</span>
                <span className="font-medium">Эргономичные кресла</span>
              </li>
            </ul>
          </div>

          <div 
            className="rounded-xl p-6 border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <h3 className="text-xl font-semibold mb-3 text-teal-200">Логистика</h3>
            <ul className="space-y-2 text-purple-100">
              <li className="flex justify-between">
                <span>Время монтажа:</span>
                <span className="font-medium">8 часов</span>
              </li>
              <li className="flex justify-between">
                <span>Время демонтажа:</span>
                <span className="font-medium">6 часов</span>
              </li>
              <li className="flex justify-between">
                <span>Требования к площадке:</span>
                <span className="font-medium">Ровная поверхность</span>
              </li>
              <li className="flex justify-between">
                <span>Электропитание:</span>
                <span className="font-medium">380В, 20 кВт</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center text-teal-300 hover:text-teal-200 font-medium">
            Скачать полную спецификацию <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DomeSpecs;
