import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="section-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <div className="text-white font-bold text-2xl">
                КиноСфера
              </div>
            </Link>
            <p className="text-purple-200 mb-4">
              Создаем незабываемые впечатления с помощью современных купольных технологий 
              для развлечений, образования и бизнеса.
            </p>
          </div>

          {/* Column 2 - Dome Sizes */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Размеры куполов</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dome/s" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Купол S
                </Link>
              </li>
              <li>
                <Link to="/dome/m" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Купол M
                </Link>
              </li>
              <li>
                <Link to="/dome/l" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Купол L
                </Link>
              </li>
              <li>
                <Link to="/dome/xl" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Купол XL
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Categories */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Категории</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Мероприятия
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Наука
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Развлечения
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Культура
                </a>
              </li>
              <li>
                <a href="#" className="text-purple-200 hover:text-teal-300 transition-colors">
                  Бизнес
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-purple-200">
                <Mail className="h-5 w-5 text-teal-300" />
                <span>info@kinosfera.pro</span>
              </li>
              <li className="flex items-center gap-2 text-purple-200">
                <Phone className="h-5 w-5 text-teal-300" />
                <span>8 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2 text-purple-200">
                <MapPin className="h-5 w-5 text-teal-300" />
                <span>Большой Кисельный пер., 7, стр. 2, Москва</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-purple-200">© 2023 КиноСфера. Все права защищены.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-purple-200 hover:text-teal-300 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
