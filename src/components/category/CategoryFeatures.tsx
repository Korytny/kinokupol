
import React from "react";
import { useParams } from "react-router-dom";

const categoryFeaturesData = {
  events: {
    title: "Особенности организации мероприятий",
    features: [
      { image: "/img/post7.jpg", title: "Гибкая конфигурация", description: "Адаптируем пространство под любое количество гостей и формат мероприятия." },
      { image: "/img/post8.jpg", title: "Техническое оснащение", description: "Современное звуковое и световое оборудование для создания нужной атмосферы." },
      { image: "/img/post9.jpg", title: "Полное погружение", description: "360-градусные проекции, которые перенесут ваших гостей в другую реальность." },
      { image: "/img/post10.jpg", title: "Кейтеринг и обслуживание", description: "Организация питания и полного сопровождения вашего мероприятия." },
      { image: "/img/post11.jpg", title: "Брендирование пространства", description: "Возможности для оформления купола в соответствии с вашим фирменным стилем." },
      { image: "/img/post12.png", title: "Незабываемые впечатления", description: "Удивите своих гостей уникальным форматом, который запомнится надолго." },
    ],
  },
  science: {
    title: "Возможности для науки и образования",
    features: [
      { image: "/img/post1.jpg", title: "Визуализация данных", description: "Наглядное представление сложных данных и моделей на полнокупольном экране." },
      { image: "/img/post2.jpg", title: "Астрономические программы", description: "Проведение лекций и показов звездного неба с высокой степенью реализма." },
      { image: "/img/post3.jpg", title: "Интерактивные уроки", description: "Вовлекайте учащихся в процесс обучения с помощью иммерсивных технологий." },
      { image: "/img/post4.jpg", title: "Научные конференции", description: "Организация конференций и симпозиумов в уникальной и вдохновляющей обстановке." },
      { image: "/img/post5.jpg", title: "Виртуальные лаборатории", description: "Проведение экспериментов в виртуальной среде с эффектом полного присутствия." },
      { image: "/img/post6.jpg", title: "Образовательные фильмы", description: "Показ научно-популярных фильмов в формате 360 градусов." },
    ],
  },
  entertainment: {
    title: "Форматы развлечений",
    features: [
      { image: "/img/post7.jpg", title: "Кинопоказы 360°", description: "Смотрите любимые фильмы и эксклюзивный контент в новом формате." },
      { image: "/img/post8.jpg", title: "Игровые турниры", description: "Проводите киберспортивные соревнования с трансляцией на купольный экран." },
      { image: "/img/post9.jpg", title: "Музыкальные шоу", description: "Аудиовизуальные перформансы и концерты с объемным звуком." },
      { image: "/img/post10.jpg", title: "Детские праздники", description: "Интерактивные программы и мультфильмы для самых маленьких гостей." },
      { image: "/img/post11.jpg", title: "Тематические вечеринки", description: "Создайте уникальную атмосферу для любого праздника." },
      { image: "/img/post12.png", title: "Релакс-программы", description: "Медитации и программы для расслабления под куполом звездного неба." },
    ],
  },
  culture: {
    title: "Культурные проекты в куполе",
    features: [
      { image: "/img/post1.jpg", title: "Иммерсивные выставки", description: "Оживите полотна великих художников с помощью полнокупольных проекций." },
      { image: "/img/post2.jpg", title: "Театральные постановки", description: "Экспериментальные спектакли и перформансы в уникальных декорациях." },
      { image: "/img/post3.jpg", title: "Исторические реконструкции", description: "Перенеситесь в прошлое и станьте свидетелем великих событий." },
      { image: "/img/post4.jpg", title: "Цифровое искусство", description: "Выставки современных медиа-художников и digital-art инсталляции." },
      { image: "/img/post5.jpg", title: "Литературные вечера", description: "Проведение чтений и встреч с писателями в атмосферной обстановке." },
      { image: "/img/post6.jpg", title: "Музыкальные фестивали", description: "Организация концертов и фестивалей с уникальным аудиовизуальным опытом." },
    ],
  },
  business: {
    title: "Ключевые особенности для бизнеса",
    features: [
      {
        image: "/img/post1.jpg",
        title: "Презентации продуктов",
        description: "Создайте вау-эффект для запуска новых продуктов, используя 360-градусные проекции и интерактивные элементы.",
      },
      {
        image: "/img/post2.jpg",
        title: "Корпоративные мероприятия",
        description: "Проводите незабываемые корпоративы, тимбилдинги и конференции в уникальной иммерсивной среде.",
      },
      {
        image: "/img/post3.jpg",
        title: "Выставки и ярмарки",
        description: "Привлекайте максимальное внимание к вашему стенду с помощью футуристичного купольного павильона.",
      },
      {
        image: "/img/post4.jpg",
        title: "Промо-акции",
        description: "Организуйте яркие и запоминающиеся промо-кампании, которые выделят вас на фоне конкурентов.",
      },
      {
        image: "/img/post5.jpg",
        title: "VIP-зоны и лаунжи",
        description: "Создайте эксклюзивные и комфортные зоны для важных гостей и партнеров.",
      },
      {
        image: "/img/post6.jpg",
        title: "Образовательные программы",
        description: "Используйте купольные пространства для проведения тренингов, мастер-классов и лекций в интерактивном формате.",
      },
    ],
  },
};

const CategoryFeatures: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const data = categoryFeaturesData[category as keyof typeof categoryFeaturesData] || { title: "Особенности", features: [] };

  return (
    <section className="section section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            {data.title}
          </h2>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto">
            Наши купольные решения предлагают уникальные возможности для ваших задач.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.features.map((feature, index) => (
            <div 
              key={index}
              className="bg-slate-900/50 border border-white/30 text-white rounded-2xl overflow-hidden hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-2 p-6 flex items-center shadow-lg hover:shadow-xl"
            >
              <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 mr-6">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-teal-200">{feature.title}</h3>
                <p className="text-purple-100">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFeatures;
