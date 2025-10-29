
import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const caseStudiesData = {
  events: {
    title: "Примеры мероприятий",
    studies: [
      { image: "/img/post1.jpg", title: "Музыкальный фестиваль 'Космос'", description: "Мы создали главную сцену и несколько чилаут-зон на крупном музыкальном фестивале." },
      { image: "/img/post2.jpg", title: "Городской праздник 'День Города'", description: "Наша центральная инсталляция в главном парке города радовала всех программой для всей семьи." },
      { image: "/img/post3.jpg", title: "Частная вечеринка 'Звездная ночь'", description: "Мы организовали эксклюзивное мероприятие с фуршетом, диджеем и проекциями звездного неба." },
      { image: "/img/post4.jpg", title: "Свадебное торжество", description: "Наш купол стал уникальным пространством для проведения незабываемой свадьбы." },
      { image: "/img/post5.jpg", title: "Спортивная фан-зона", description: "Мы организовали зону для болельщиков во время крупных спортивных событий." },
    ],
  },
  science: {
    title: "Примеры научных проектов",
    studies: [
      { image: "/img/post6.jpg", title: "Передвижной планетарий для школ", description: "Мы провели образовательный тур по школам и вузам с лекциями по астрономии." },
      { image: "/img/post7.jpg", title: "Выставка 'Мир под микроскопом'", description: "Наша иммерсивная выставка продемонстрировала всю красоту микромира." },
      { image: "/img/post8.jpg", title: "Лекторий 'Эволюция Вселенной'", description: "Мы организовали курс лекций от ведущих ученых с визуализацией на купольном экране." },
      { image: "/img/post9.jpg", title: "Съемки научно-популярного фильма", description: "Наш купол был использован в качестве павильона для съемок фильма о космосе." },
      { image: "/img/post10.jpg", title: "Инсталляция для музея науки", description: "Мы создали постоянную экспозицию, посвященную изучению планет Солнечной системы." },
    ],
  },
  entertainment: {
    title: "Примеры развлекательных проектов",
    studies: [
      { image: "/img/post11.jpg", title: "360° кинотеатр в парке развлечений", description: "Мы показывали эксклюзивный развлекательный контент для посетителей парка." },
      { image: "/img/post12.png", title: "Игровая зона 'Виртуальная реальность'", description: "Мы создали зону с VR-играми и симуляторами с полным погружением." },
      { image: "/img/post1.jpg", title: "Квест-комната 'Космический корабль'", description: "Наш купол стал антуражем для популярного квеста в реальности." },
      { image: "/img/post2.jpg", title: "Новогоднее шоу для детей", description: "Мы показали интерактивную сказку с Дедом Морозом и Снегурочкой на купольном экране." },
      { image: "/img/post3.jpg", title: "Лазерное шоу и дискотека", description: "Мы проводили вечеринки с современной музыкой и впечатляющими спецэффектами." },
    ],
  },
  culture: {
    title: "Примеры культурных проектов",
    studies: [
      { image: "/img/post4.jpg", title: "Выставка 'Ван Гог: Живые полотна'", description: "Популярная мультимедийная выставка была адаптирована для нашего купольного формата." },
      { image: "/img/post5.jpg", title: "Спектакль 'Маленький принц'", description: "Мы организовали театральную постановку с использованием 360-градусных видеодекораций." },
      { image: "/img/post6.jpg", title: "Концерт классической музыки", description: "Мы провели вечер симфонической музыки с проекциями абстрактных визуализаций." },
      { image: "/img/post7.jpg", title: "Выставка цифрового искусства 'Art-Digital'", description: "В нашем куполе прошла экспозиция работ современных медиа-художников со всего мира." },
      { image: "/img/post8.jpg", title: "Поэтический вечер 'Серебряный век'", description: "Мы провели вечер чтения стихов в сопровождении тематических видеоинсталляций." },
    ],
  },
  business: {
    title: "Примеры бизнес-проектов",
    studies: [
      {
        image: "/img/post1.jpg",
        title: "Запуск продукта для TechCorp",
        description: "Мы провели иммерсивную презентацию нового гаджета с 3D-визуализацией.",
      },
      {
        image: "/img/post2.jpg",
        title: "Конференция для Global Finance",
        description: "Наш купол стал местом проведения международной финансовой конференции с панорамными экранами.",
      },
      {
        image: "/img/post3.jpg",
        title: "Корпоратив для Creative Agency",
        description: "Мы организовали тематическое мероприятие с полным погружением в атмосферу бренда.",
      },
      {
        image: "/img/post4.jpg",
        title: "Выставочный стенд для AutoShow",
        description: "Наш футуристичный купольный стенд привлек внимание посетителей и медиа.",
      },
      {
        image: "/img/post5.jpg",
        title: "VIP-лаунж на Fashion Week",
        description: "Мы создали эксклюзивную зону отдыха для гостей и партнеров с премиальным обслуживанием.",
      },
    ],
  },
};

const CategoryCaseStudies: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const data = caseStudiesData[category as keyof typeof caseStudiesData] || { title: "Примеры проектов", studies: [] };

  return (
    <section className="section section-darker py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            {data.title}
          </h2>
          <p className="text-lg text-purple-100 max-w-4xl mx-auto">
            Взгляните на успешно реализованные проекты с использованием наших купольных конструкций.
          </p>
        </div>

        <Carousel 
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {data.studies.map((study, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-transparent border-white/20 text-white overflow-hidden hover:border-teal-300/50 hover:shadow-lg transition-all duration-300">
                    <CardContent className="relative flex aspect-square items-end justify-center p-0">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold mb-2">{study.title}</h3>
                        <p className="text-sm text-white/80">{study.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white bg-white/10 hover:bg-white/20 border-white/20" />
          <CarouselNext className="text-white bg-white/10 hover:bg-white/20 border-white/20" />
        </Carousel>
      </div>
    </section>
  );
};

export default CategoryCaseStudies;
