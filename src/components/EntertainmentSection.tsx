import React from "react";
import { Button } from "@/components/ui/button";
import { Gamepad, PartyPopper, Theater } from "lucide-react";
import HowItWorksSection from "./HowItWorksSection";

interface EntertainmentOption {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const entertainmentOptions: EntertainmentOption[] = [
  {
    title: "Детские шоу",
    icon: <PartyPopper className="h-6 w-6" />,
    color: "bg-orange-500",
    description: "Интерактивные программы для детей с анимацией и спецэффектами"
  },
  {
    title: "Развлекательные программы",
    icon: <Theater className="h-6 w-6" />,
    color: "bg-pink-500",
    description: "Шоу-программы для всей семьи с элементами театрализации"
  },
  {
    title: "Игровые симуляции",
    icon: <Gamepad className="h-6 w-6" />,
    color: "bg-green-500",
    description: "Иммерсивные игровые миры с эффектом полного присутствия"
  }
];

const EntertainmentSection: React.FC = () => {
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-4 relative">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-teal-300 opacity-10 blur-xl"></div>
        
        {/* Wave design at the top */}
        <div className="relative h-20 mb-8">
          <div className="absolute w-full">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
              <path 
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-teal-400/30"
              ></path>
            </svg>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-teal-200">
            Развлечения под куполом
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Удивите ваших посетителей незабываемыми развлекательными программами в атмосфере полного погружения
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2 relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-purple-500 rounded-2xl blur opacity-50"></div>
            <img 
              src="/img/post2.jpg" 
              alt="Развлекательные программы под куполом КиноКупол" 
              className="relative rounded-2xl w-full h-[500px] object-cover border border-white/20"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute -bottom-5 -right-5 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform rotate-3 w-40 md:w-64">
              <div className="text-2xl font-bold text-teal-300">98%</div>
              <div className="text-sm text-purple-100">посетителей рекомендуют купольные развлечения друзьям</div>
            </div>
            <div className="absolute -top-5 -left-5 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 transform -rotate-3 w-40 md:w-64">
              <div className="text-2xl font-bold text-purple-300">+38%</div>
              <div className="text-sm text-purple-100">рост посещаемости развлекательных центров</div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl h-full border border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-teal-200">Развлекательные программы</h3>
              
              <div className="space-y-6">
                {entertainmentOptions.map((option, index) => (
                  <div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-all duration-300 flex items-start border border-white/20"
                  >
                    <div className={`${option.color} p-3 rounded-xl text-white mr-4`}>
                      {option.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-purple-100">{option.title}</h4>
                      <p className="text-purple-200">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600 text-white w-full py-6 rounded-xl border-0">
                  <PartyPopper className="mr-2 h-5 w-5" />
                  Забронировать развлекательную программу
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <HowItWorksSection />
      </div>
    </section>
  );
};

export default EntertainmentSection;
