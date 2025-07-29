import React from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const DomeCTA = () => {
  const { size } = useParams<{ size: string }>();
  const domeSize = size?.toUpperCase() || "L";

  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            Готовы организовать мероприятие в куполе {domeSize}?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Наша команда поможет спланировать ваше мероприятие от начала до конца.
            Оставьте заявку, и мы свяжемся с вами в течение 24 часов.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Button className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white text-lg py-6">
              Забронировать купол
            </Button>
            <Button variant="outline" className="border-teal-300 text-teal-300 hover:bg-white/10 hover:text-teal-200 text-lg py-6">
              Получить консультацию
            </Button>
          </div>
          
          <p className="mt-8 text-sm text-purple-200">
            Также вы можете связаться с нами по телефону <a href="tel:+78001234567" className="text-teal-300 hover:text-teal-200 underline">8 (800) 123-45-67</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DomeCTA;
