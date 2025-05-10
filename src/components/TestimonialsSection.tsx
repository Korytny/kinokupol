import React from "react";
import { Button } from "@/components/ui/button";

interface TestimonialType {
  text: string;
  author: string;
  position: string;
  company: string;
  logo: string;
}

const testimonials: TestimonialType[] = [
  {
    text: "Запуск нашего нового продукта в купольном кинотеатре создал wow-эффект у клиентов и привлек небывалое внимание прессы.",
    author: "Иван Смирнов",
    position: "Директор по маркетингу",
    company: "TechData",
    logo: "TD"
  },
  {
    text: "Корпоративное мероприятие в формате купола позволило нам представить стратегию развития компании в совершенно новом свете.",
    author: "Елена Васильева",
    position: "CEO",
    company: "Global Systems",
    logo: "GS"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2 text-white">Что говорят наши клиенты</h3>
            <p className="text-blue-200">Отзывы ведущих компаний, использовавших купольные решения</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="bg-teal-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonial.company}</div>
                    <div className="text-sm text-blue-300">{testimonial.position}</div>
                  </div>
                </div>
                <p className="italic text-blue-100 mb-4">"{testimonial.text}"</p>
                <div className="text-sm font-medium text-white">— {testimonial.author}</div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
              Смотреть все отзывы
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
