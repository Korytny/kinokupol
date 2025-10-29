import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Phone, X, Menu } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className="sticky top-0 z-50 border-b border-white/20"
      style={{
        backgroundColor: 'rgb(50,30,60)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-white font-bold text-2xl">
              КиноСфера
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-teal-300 transition-colors">
            Главная
          </Link>
          <div className="relative group">
            <button className="text-white hover:text-teal-300 transition-colors flex items-center">
              Размеры 
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800/95 backdrop-blur-sm ring-1 ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link to="/dome/s" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Купол S</Link>
                <Link to="/dome/m" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Купол M</Link>
                <Link to="/dome/l" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Купол L</Link>
                <Link to="/dome/xl" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Купол XL</Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-white hover:text-teal-300 transition-colors flex items-center">
              Категории 
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-800/95 backdrop-blur-sm ring-1 ring-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link to="/category/events" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Мероприятия</Link>
                <Link to="/category/science" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Наука</Link>
                <Link to="/category/entertainment" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Развлечения</Link>
                <Link to="/category/culture" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Культура</Link>
                <Link to="/category/business" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Бизнес</Link>
              </div>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('video')}
            className="text-white hover:text-teal-300 transition-colors cursor-pointer"
          >
            Видео
          </button>
          <button onClick={() => scrollToSection('features')} className="text-white hover:text-teal-300 transition-colors cursor-pointer">О нас</button>
          <button onClick={() => scrollToSection('contact')} className="text-white hover:text-teal-300 transition-colors cursor-pointer">Контакты</button>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-4">
          <a href="tel:+79771081199" className="hidden md:flex items-center text-teal-300 font-medium">
            <Phone className="h-5 w-5 mr-2" />
            +7 (977) 108-11-99
          </a>
          <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-teal-400 to-purple-500 hover:from-teal-500 hover:to-purple-600">
            Заказать
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            className="md:hidden rounded-full border-white/30 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-t border-white/20">
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Главная
              </button>
              
              <button
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Преимущества
              </button>
              
              <button
                onClick={() => scrollToSection('video')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Видео
              </button>
              
              <button
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Отзывы
              </button>
              
              <button
                onClick={() => scrollToSection('dome-sizes')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Размеры куполов
              </button>
              
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Как это работает
              </button>
              
              <button
                onClick={() => scrollToSection('categories')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Категории
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-white hover:text-teal-300 py-2 transition-colors"
              >
                Контакты
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/20">
              <a 
                href="tel:+79771081199" 
                className="flex items-center text-teal-300 font-medium"
              >
                <Phone className="h-5 w-5 mr-2" />
                +7 (977) 108-11-99
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
