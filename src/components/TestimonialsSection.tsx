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
    <section id="testimonials" className="section section-dark">
      <div className="container mx-auto px-4">
        <div 
          className="rounded-xl p-8 border border-white/20"
          style={{
            backgroundColor: 'rgb(30,15,30)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">Что говорят наши клиенты</h3>
            <p className="text-purple-200">Отзывы ведущих компаний, использовавших купольные решения</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 rounded-lg border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
                style={{
                  backgroundColor: 'rgb(40,20,40)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-teal-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4">
                    {testimonial.logo}
                  </div>
                  <div>
                    <div className="font-medium text-white">{testimonial.company}</div>
                    <div className="text-sm text-purple-300">{testimonial.position}</div>
                  </div>
                </div>
                <p className="italic text-purple-100 mb-4">"{testimonial.text}"</p>
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
