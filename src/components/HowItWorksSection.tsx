import React from "react";

interface TimelineItem {
  title: string;
  description: string;
  icon: string;
  image: string;
  position: 'left' | 'right';
}

const HowItWorksSection: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    { 
      title: "Подготовка", 
      description: "На первом этапе мы тщательно анализируем ваши потребности и особенности площадки. Наша команда разрабатывает индивидуальный план размещения купола, учитывая все технические нюансы и ваши пожелания. Мы подбираем оптимальное оборудование и готовим все необходимое для бесперебойной работы.",
      icon: "🛠️",
      image: "/img/post1.jpg",
      position: "left",
    },
    { 
      title: "Установка", 
      description: "Благодаря модульной конструкции и опыту наших специалистов, монтаж купола занимает минимальное время — всего 3-4 часа. Мы обеспечиваем быструю и безопасную установку, а также настройку всех систем: проекционного оборудования, звука и освещения. Все готово к приему гостей в кратчайшие сроки.",
      icon: "🏗️",
      image: "/img/post2.jpg",
      position: "right",
    },
    { 
      title: "Проведение", 
      description: "Во время мероприятия наша команда обеспечивает полную техническую поддержку. Мы следим за бесперебойной работой всего оборудования, управляем контентом и оперативно решаем любые возникающие вопросы. Ваше мероприятие пройдет гладко и без заминок, оставляя только положительные впечатления.",
      icon: "🎮",
      image: "/img/post3.jpg",
      position: "left",
    },
    { 
      title: "Демонтаж", 
      description: "После завершения мероприятия мы быстро и аккуратно демонтируем все оборудование. Мы гарантируем чистоту и порядок на площадке, не оставляя следов нашего присутствия. Весь процесс демонтажа занимает всего несколько часов, минимизируя ваше время и усилия.",
      icon: "✅",
      image: "/img/post4.jpg",
      position: "right",
    }
  ];

  return (
    <section id="how-it-works" className="section section-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            Как это работает
          </h2>
          <p className="text-lg text-purple-100 max-w-4xl mx-auto">
            Мы берем на себя все этапы реализации проекта, от первоначальной консультации до полного демонтажа оборудования после мероприятия. Наш процесс отлажен до мелочей, чтобы вы могли сосредоточиться на самом главном — впечатлениях ваших гостей.
          </p>
        </div>

        <div className="relative" style={{ height: '800px' }}>
          {/* Timeline connector for desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-400/50 top-0"></div>
          {/* Timeline connector for mobile */}
          <div className="md:hidden absolute left-6 transform -translate-x-1/2 h-full w-1 bg-teal-400/50 top-0"></div>
          
          {/* Timeline items */}
          <div className="relative">
            {timelineItems.map((item, index) => (
              <div 
                key={index} 
                className="absolute w-full flex items-start md:items-center md:justify-center"
                style={{ top: `${index * 200}px` }}
              >
                {/* Left Card (Desktop) */}
                <div className={`hidden md:block w-5/12 ${item.position === 'right' ? 'invisible' : ''}`}>
                  {item.position === 'left' && (
                    <div className="w-full bg-slate-900/50 border border-white/20 text-white rounded-2xl overflow-hidden hover:border-teal-300/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl p-6 flex items-center flex-row-reverse">
                      <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 ml-6">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-teal-200">{item.title}</h4>
                        <p className="text-purple-100">{item.description}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Icon */}
                <div className="z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-400 text-white shadow-lg text-2xl mx-6 md:mx-0">
                  {item.icon}
                </div>

                {/* Right Card (Desktop) / All Cards (Mobile) */}
                <div className={`w-full md:w-5/12 ${item.position === 'left' ? 'md:invisible' : ''}`}>
                  <div className="w-full bg-slate-900/50 border border-white/20 text-white rounded-2xl overflow-hidden hover:border-teal-300/50 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl p-6 flex items-center">
                    <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0 mr-6">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-teal-200">{item.title}</h4>
                      <p className="text-purple-100">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
