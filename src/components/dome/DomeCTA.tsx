
import React from "react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

const DomeCTA = () => {
  const { size } = useParams<{ size: string }>();
  const domeSize = size?.toUpperCase() || "L";

  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы организовать мероприятие в куполе {domeSize}?
          </h2>
          <p className="text-lg text-purple-100 mb-8">
            Наша команда поможет спланировать ваше мероприятие от начала до конца.
            Оставьте заявку, и мы свяжемся с вами в течение 24 часов.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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

export default DomeCTA;
