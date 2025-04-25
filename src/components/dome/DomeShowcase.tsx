
import React from "react";
import { Button } from "@/components/ui/button";

const DomeShowcase = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-purple-900">
          Фотогалерея купола L
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Оцените возможности нашего купола L через галерею реализованных проектов.
          Каждое изображение демонстрирует универсальность и впечатляющие масштабы.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Images would typically be loaded dynamically from a CMS, using placeholders here */}
          <div className="overflow-hidden rounded-xl aspect-video bg-purple-200 hover:opacity-90 transition-opacity">
            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-200 flex items-center justify-center">
              <span className="text-purple-800">Фото 1</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl aspect-video bg-purple-200 hover:opacity-90 transition-opacity">
            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-200 flex items-center justify-center">
              <span className="text-purple-800">Фото 2</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl aspect-video bg-purple-200 hover:opacity-90 transition-opacity">
            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-200 flex items-center justify-center">
              <span className="text-purple-800">Фото 3</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl aspect-video bg-purple-200 hover:opacity-90 transition-opacity">
            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-200 flex items-center justify-center">
              <span className="text-purple-800">Фото 4</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl aspect-video bg-purple-200 hover:opacity-90 transition-opacity">
            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-200 flex items-center justify-center">
              <span className="text-purple-800">Фото 5</span>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl aspect-video bg-purple-200 hover:opacity-90 transition-opacity">
            <div className="w-full h-full bg-gradient-to-br from-purple-300 to-pink-200 flex items-center justify-center">
              <span className="text-purple-800">Фото 6</span>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button className="bg-purple-600 hover:bg-purple-700">
            Смотреть все фотографии
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DomeShowcase;
