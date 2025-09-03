import React from "react";

interface TimelineItem {
  title: string;
  description: string;
  icon: string;
  position: 'left' | 'right';
}

const HowItWorksSection: React.FC = () => {
  const timelineItems: TimelineItem[] = [
    { 
      title: "Подготовка", 
      description: "Мы подбираем оптимальное расположение купола и готовим техническое оснащение",
      icon: "🛠️",
      position: "left"
    },
    { 
      title: "Установка", 
      description: "Быстрый монтаж купола и настройка всех систем занимает всего 3-4 часа",
      icon: "🏗️",
      position: "right"
    },
    { 
      title: "Проведение", 
      description: "Наши специалисты обеспечивают бесперебойную работу всего оборудования",
      icon: "🎮",
      position: "left"
    },
    { 
      title: "Демонтаж", 
      description: "После мероприятия мы быстро и аккуратно демонтируем все оборудование",
      icon: "✅",
      position: "right"
    }
  ];

  return (
    <section id="how-it-works" className="section section-dark">
      <div className="container mx-auto px-4">
        <h3 className="text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
          Как это работает
        </h3>
        <div className="relative">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-400/50 top-0"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 relative">
            {timelineItems.map((item, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className={`w-5/12 ${item.position === 'right' ? 'invisible' : ''}`}>
                  {item.position === 'left' && (
                    <div 
                      className="p-6 rounded-xl border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
                      style={{
                        backgroundColor: 'rgb(40,20,40)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <h4 className="text-xl font-bold mb-2 text-teal-200">{item.title}</h4>
                      <p className="text-purple-100">{item.description}</p>
                    </div>
                  )}
                </div>
                
                <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-teal-400 text-white shadow-lg text-2xl">
                  {item.icon}
                </div>
                
                <div className={`w-5/12 ${item.position === 'left' ? 'invisible' : ''}`}>
                  {item.position === 'right' && (
                    <div 
                      className="p-6 rounded-xl border border-white/20 hover:bg-[rgb(60,30,60)] transition-all duration-300"
                      style={{
                        backgroundColor: 'rgb(40,20,40)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <h4 className="text-xl font-bold mb-2 text-teal-200">{item.title}</h4>
                      <p className="text-purple-100">{item.description}</p>
                    </div>
                  )}
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
