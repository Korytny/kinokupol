
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Calendar, 
  MapPin, 
  Users, 
  ArrowRight, 
  Building 
} from "lucide-react";

// Define dome sizes
const domeSizes = [
  {
    id: "s",
    name: "Купол S",
    description: "Компактный купол для небольших мероприятий до 30 человек",
    capacity: "До 30 человек",
    diameter: "6м",
    height: "3м",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: "m",
    name: "Купол M",
    description: "Средний купол для мероприятий до 80 человек",
    capacity: "До 80 человек",
    diameter: "10м",
    height: "5м",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
  },
  {
    id: "l",
    name: "Купол L",
    description: "Большой купол для масштабных мероприятий до 200 человек",
    capacity: "До 200 человек",
    diameter: "15м",
    height: "7.5м",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07"
  },
  {
    id: "xl",
    name: "Купол XL",
    description: "Максимальный купол для крупных событий до 350 человек",
    capacity: "До 350 человек",
    diameter: "20м",
    height: "10м",
    image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098"
  }
];

// Define usage categories
const usageCategories = [
  {
    id: "events",
    name: "Мероприятия",
    description: "Выставки, презентации, фестивали и праздники",
    icon: Calendar
  },
  {
    id: "science",
    name: "Наука",
    description: "Планетарии, научные визуализации, образовательные программы",
    icon: Building
  },
  {
    id: "entertainment",
    name: "Развлечения",
    description: "Кинопоказы, шоу, игры и аттракционы",
    icon: Users
  },
  {
    id: "culture",
    name: "Культура",
    description: "Музеи, художественные галереи, исторические выставки",
    icon: Building
  },
  {
    id: "business",
    name: "Бизнес",
    description: "Корпоративные события, презентации, тренинги",
    icon: Building
  }
];

const Index: React.FC = () => {
  const [city, setCity] = useState("");
  const [format, setFormat] = useState("");
  const [guests, setGuests] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Hero Section with Form */}
        <section className="relative h-[700px] overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              КиноКупол
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in">
              Создавайте незабываемые впечатления с помощью современных купольных технологий
            </p>
            
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 w-full max-w-4xl shadow-lg animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="text-gray-800 font-medium mb-1 text-left">Ваш город</label>
                  <Input 
                    type="text" 
                    placeholder="Выберите город" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-gray-800"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label className="text-gray-800 font-medium mb-1 text-left">Формат</label>
                  <Input 
                    type="text" 
                    placeholder="Выберите формат" 
                    value={format}
                    onChange={(e) => setFormat(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-gray-800"
                  />
                </div>
                
                <div className="flex flex-col">
                  <label className="text-gray-800 font-medium mb-1 text-left">Количество гостей</label>
                  <Input 
                    type="number" 
                    placeholder="Введите количество" 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-gray-800"
                  />
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                  Подобрать купол
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Dome Sizes Section */}
        <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Размеры куполов</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Выберите идеальный размер купола для вашего мероприятия, от компактного для небольших групп
                до впечатляющего XL-купола для масштабных событий
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {domeSizes.map((dome) => (
                <Link to={`/dome/${dome.id}`} key={dome.id}>
                  <Card className="hover:shadow-lg transition-shadow overflow-hidden h-full hover-scale">
                    <div className="relative">
                      <AspectRatio ratio={16/9}>
                        <img 
                          src={dome.image} 
                          alt={dome.name}
                          className="object-cover w-full h-full"
                        />
                      </AspectRatio>
                      <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                        {dome.id.toUpperCase()}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>{dome.name}</CardTitle>
                      <CardDescription>{dome.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-gray-600">{dome.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-purple-600" />
                        <span className="text-sm text-gray-600">Диаметр: {dome.diameter}, Высота: {dome.height}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Подробнее <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Usage Categories Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Категории использования</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Купольные кинотеатры подходят для различных сценариев использования
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {usageCategories.map((category) => (
                <Card key={category.id} className="hover:shadow-lg transition-shadow hover-scale">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <category.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="hover:bg-purple-50 hover:text-purple-600">
                      Узнать больше <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-br from-purple-900 to-purple-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества куполов КиноКупол</h2>
              <p className="text-lg text-purple-100 max-w-3xl mx-auto">
                Наши купольные решения предлагают уникальные возможности для вашего бизнеса или мероприятия
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Мобильность и установка</h3>
                <p className="text-purple-100">
                  Быстрая установка в любом месте за 1-2 дня, возможность перемещения между локациями
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Иммерсивный опыт</h3>
                <p className="text-purple-100">
                  Полное погружение зрителей благодаря 360° проекции и объемному звуку
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Универсальность</h3>
                <p className="text-purple-100">
                  Подходит для широкого спектра мероприятий, от развлекательных до образовательных
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-900">Отзывы клиентов</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Узнайте, что говорят о нас клиенты, которые уже использовали купольные решения КиноКупол
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <p className="italic text-gray-700 mb-4">
                    "Организовали корпоративное мероприятие в куполе L. Впечатления превзошли все ожидания, 
                    гости были в восторге от формата. Обязательно будем сотрудничать снова!"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">Александр Петров</p>
                      <p className="text-sm text-gray-500">CEO, Tech Corp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial 2 */}
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <p className="italic text-gray-700 mb-4">
                    "Использовали купол M для образовательной программы в школе. Дети были в восторге от 
                    иммерсивного опыта, а педагоги отметили высокую эффективность такого формата обучения."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">Мария Иванова</p>
                      <p className="text-sm text-gray-500">Директор школы №123</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial 3 */}
              <Card className="border border-gray-200">
                <CardContent className="pt-6">
                  <p className="italic text-gray-700 mb-4">
                    "Заказывали купол XL для фестиваля. Команда КиноКупол проявила себя как надежный партнер, 
                    все было организовано на высшем уровне, несмотря на сжатые сроки."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 mr-3"></div>
                    <div>
                      <p className="font-medium">Дмитрий Сидоров</p>
                      <p className="text-sm text-gray-500">Организатор фестиваля ArtFest</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Готовы создать незабываемое впечатление с КиноКупол?
              </h2>
              <p className="text-lg text-purple-100 mb-8">
                Свяжитесь с нами, чтобы обсудить ваш проект и выбрать оптимальное купольное решение
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <Button className="bg-white hover:bg-gray-100 text-purple-900 text-lg py-6">
                  Забронировать купол
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-purple-800 text-lg py-6">
                  Получить консультацию
                </Button>
              </div>
              
              <p className="mt-8 text-sm text-purple-200">
                Также вы можете связаться с нами по телефону <a href="tel:+78001234567" className="underline">8 (800) 123-45-67</a>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
