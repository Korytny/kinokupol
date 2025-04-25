
import React from "react";
import { ArrowRight } from "lucide-react";

const DomeUseCases = () => {
  const categories = [
    {
      id: "events",
      title: "Мероприятия",
      description: "Фестивали, выставки, презентации",
      bgClass: "bg-gradient-to-br from-purple-100 to-purple-200"
    },
    {
      id: "science",
      title: "Наука",
      description: "Планетарии, научные визуализации",
      bgClass: "bg-gradient-to-br from-blue-100 to-blue-200"
    },
    {
      id: "entertainment",
      title: "Развлечения",
      description: "Парки развлечений, шоу, аттракционы",
      bgClass: "bg-gradient-to-br from-green-100 to-green-200"
    },
    {
      id: "culture",
      title: "Культура",
      description: "Музеи, выставки, галереи искусства",
      bgClass: "bg-gradient-to-br from-amber-100 to-amber-200"
    },
    {
      id: "business",
      title: "Бизнес",
      description: "Корпоративные мероприятия, тренинги",
      bgClass: "bg-gradient-to-br from-indigo-100 to-indigo-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-purple-900">
          Варианты использования
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Купол L идеально подходит для различных целей благодаря своей вместительности,
          продуманной акустике и качественному проекционному оборудованию.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a 
              key={category.id} 
              href={`/category/${category.id}?size=L`} 
              className={`${category.bgClass} rounded-xl p-6 transition-all hover:shadow-lg flex flex-col h-full`}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {category.title}
              </h3>
              <p className="text-gray-700 mb-4 flex-grow">
                {category.description}
              </p>
              <div className="flex items-center text-purple-700 font-medium mt-auto">
                Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeUseCases;
