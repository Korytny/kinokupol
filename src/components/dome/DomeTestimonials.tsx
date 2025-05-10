
import React from "react";

const DomeTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      author: "Александр Иванов",
      role: "Организатор фестиваля",
      content: "Купол L превзошел все наши ожидания! Уникальная атмосфера и отличное качество проекций сделали наше мероприятие незабываемым для всех гостей.",
      rating: 5
    },
    {
      id: 2,
      author: "Екатерина Смирнова",
      role: "Директор музея современного искусства",
      content: "Выставка в купольном формате позволила нам представить экспозицию под совершенно новым углом. Посетители были в восторге от эффекта погружения.",
      rating: 5
    },
    {
      id: 3,
      author: "Дмитрий Петров",
      role: "Руководитель корпоративных мероприятий",
      content: "Презентация нашего нового продукта в куполе L произвела фурор среди партнеров и клиентов. Техническая поддержка команды КиноКупол была на высшем уровне.",
      rating: 4
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-200">
          Отзывы клиентов
        </h2>
        <p className="text-center text-blue-100 mb-12 max-w-3xl mx-auto">
          Узнайте, что говорят о нашем куполе L клиенты, которые уже организовали свои мероприятия
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-300' : 'text-gray-500'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mb-4 text-blue-100 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="font-medium text-teal-200">{testimonial.author}</div>
              <div className="text-sm text-blue-200">{testimonial.role}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#" className="text-teal-300 hover:text-teal-200 font-medium">
            Смотреть все отзывы
          </a>
        </div>
      </div>
    </section>
  );
};

export default DomeTestimonials;
