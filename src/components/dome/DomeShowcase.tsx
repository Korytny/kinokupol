import React from "react";
import { Button } from "@/components/ui/button";

const DomeShowcase = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
          Фотогалерея купола L
        </h2>
        <p className="text-center text-purple-100 mb-12 max-w-3xl mx-auto">
          Оцените возможности нашего купола L через галерею реализованных проектов.
          Каждое изображение демонстрирует универсальность и впечатляющие масштабы.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Images would typically be loaded dynamically from a CMS, using placeholders here */}
          <div 
            className="overflow-hidden rounded-xl aspect-video border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-purple-100">Фото 1</span>
            </div>
          </div>
          <div 
            className="overflow-hidden rounded-xl aspect-video border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-purple-100">Фото 2</span>
            </div>
          </div>
          <div 
            className="overflow-hidden rounded-xl aspect-video border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-purple-100">Фото 3</span>
            </div>
          </div>
          <div 
            className="overflow-hidden rounded-xl aspect-video border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-purple-100">Фото 4</span>
            </div>
          </div>
          <div 
            className="overflow-hidden rounded-xl aspect-video border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-purple-100">Фото 5</span>
            </div>
          </div>
          <div 
            className="overflow-hidden rounded-xl aspect-video border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
            style={{
              backgroundColor: 'rgb(40,20,40)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-purple-100">Фото 6</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white">
            Смотреть все фотографии
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DomeShowcase;
