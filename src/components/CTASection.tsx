import React from "react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="py-16 section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 section-title mx-auto whitespace-nowrap">
            Готовы создать незабываемое впечатление с КиноКупол?
          </h2>
          <p className="text-lg text-[#80dfd5]/80 mb-8">
            Свяжитесь с нами, чтобы обсудить ваш проект и выбрать оптимальное купольное решение
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a href="mailto:info@kinosfera.pro?subject=Бронирование купола&body=Здравствуйте, я хочу забронировать купол. Пришлите, пожалуйста, календарь и прайс.">
              <Button className="bg-gradient-to-r from-teal-400 to-purple-500 border-0 hover:from-teal-500 hover:to-purple-600 text-white text-lg py-6">
                Забронировать купол
              </Button>
            </a>
                        <a href="mailto:info@kinosfera.pro?subject=Запрос консультации&body=Здравствуйте, я хотел бы получить дополнительную информацию по куполам КиноСферы.">
                          <Button variant="outline" className="border-[#80dfd5] text-[#80dfd5] hover:bg-[#80dfd5]/10 text-lg py-6">
                            Получить консультацию
                          </Button>
                        </a>          </div>
          
          <p className="mt-8 text-sm text-[#80dfd5]/70">
            Также вы можете связаться с нами по телефону <a href="tel:+79771081199" className="underline">+7 (977) 108-11-99</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
