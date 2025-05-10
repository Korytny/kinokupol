import React from "react";
import { Button } from "@/components/ui/button";

const BusinessCTA: React.FC = () => {
  return (
    <section className="py-16">
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-xl p-10 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Готовы создать уникальное бизнес-мероприятие?</h3>
          <p className="text-blue-100 mb-8">
            Наша команда поможет реализовать проект любой сложности, от концепции до полного воплощения
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-teal-700 hover:bg-gray-100 hover:text-teal-800 font-medium">
              Запросить консультацию
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-teal-700/30">
              Скачать презентацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessCTA;
