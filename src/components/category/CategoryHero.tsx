
import React from "react";
import { useParams } from "react-router-dom";

const CategoryHero = () => {
  const { category } = useParams<{ category: string }>();

  const categoryData = {
    events: {
      title: "Мероприятия в куполе",
      description: "Создавайте незабываемые впечатления для ваших гостей с помощью иммерсивных купольных пространств",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
    },
    science: {
      title: "Наука под куполом",
      description: "Погрузитесь в мир науки с помощью высокоточных проекций и передовых технологий визуализации",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    entertainment: {
      title: "Развлечения в куполе",
      description: "Создайте уникальное развлекательное пространство с эффектом полного погружения",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
    },
    culture: {
      title: "Культурные проекты",
      description: "Новый взгляд на искусство и культуру через призму купольных технологий",
      image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098"
    },
    business: {
      title: "Бизнес-решения",
      description: "Инновационные пространства для ваших бизнес-задач и корпоративных мероприятий",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625"
    }
  };

  const data = categoryData[category as keyof typeof categoryData] || categoryData.events;

  return (
    <section className="relative h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${data.image}')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          {data.title}
        </h1>
        <p className="text-xl text-white/90 max-w-2xl animate-fade-in">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default CategoryHero;
