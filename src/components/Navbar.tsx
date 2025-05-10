
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Phone } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-white font-bold text-2xl">
            КиноКупол
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
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Мероприятия</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Наука</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Развлечения</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Культура</a>
                <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-teal-500/20 hover:text-teal-300" role="menuitem">Бизнес</a>
              </div>
            </div>
          </div>
          <a href="#" className="text-white hover:text-teal-300 transition-colors">О нас</a>
          <a href="#" className="text-white hover:text-teal-300 transition-colors">Контакты</a>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-4">
          <a href="tel:+78001234567" className="hidden md:flex items-center text-teal-300 font-medium">
            <Phone className="h-5 w-5 mr-2" />
            8 (800) 123-45-67
          </a>
          <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-teal-500 hover:to-blue-600">
            Заказать
          </Button>
          <Button variant="outline" size="icon" className="md:hidden rounded-full border-white/30 text-white hover:bg-white/10">
            <svg width="24" height="24" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1.5 7C1.22386 7 1 7.22386 1 7.5C1 7.77614 1.22386 8 1.5 8H13.5C13.7761 8 14 7.77614 14 7.5C14 7.22386 13.7761 7 13.5 7H1.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
