
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы создать незабываемое впечатление с КиноКупол?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Свяжитесь с нами, чтобы обсудить ваш проект и выбрать оптимальное купольное решение
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button className="bg-white hover:bg-gray-100 text-purple-900 text-lg py-6">
              Забронировать купол
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-purple-800 text-lg py-6">
              Получить консультацию
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-purple-200">
            Также вы можете связаться с нами по телефону <a href="tel:+78001234567" className="underline">8 (800) 123-45-67</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

