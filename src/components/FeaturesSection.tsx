import React from "react";
import { Building, Users, Calendar } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="section section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Преимущества куполов КиноКупол</h2>
          <p className="section-subtitle text-[#80dfd5]/80 max-w-4xl mx-auto">
            Наши купольные решения предлагают уникальные возможности для вашего бизнеса или мероприятия
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            className="bg-slate-900/50 border border-white/20 text-white rounded-2xl overflow-hidden hover:border-teal-300/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl p-6"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Building className="h-6 w-6 text-[#80dfd5]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#80dfd5]">Мобильность и установка</h3>
            <p className="text-purple-100">
              Быстрая установка в любом месте за 1-2 дня, возможность перемещения между локациями
            </p>
          </div>
          
          <div 
            className="bg-slate-900/50 border border-white/20 text-white rounded-2xl overflow-hidden hover:border-teal-300/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl p-6"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-[#80dfd5]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#80dfd5]">Иммерсивный опыт</h3>
            <p className="text-purple-100">
              Полное погружение зрителей благодаря 360° проекции и объемному звуку
            </p>
          </div>
          
          <div 
            className="bg-slate-900/50 border border-white/20 text-white rounded-2xl overflow-hidden hover:border-teal-300/50 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-xl p-6"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-[#80dfd5]" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#80dfd5]">Универсальность</h3>
            <p className="text-purple-100">
              Подходит для широкого спектра мероприятий, от развлекательных до образовательных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
