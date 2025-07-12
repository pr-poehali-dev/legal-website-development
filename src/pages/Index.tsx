import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Scale" size={32} className="text-blue-900" />
            <h1 className="text-2xl font-bold text-blue-900">Правовой Щит</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-900 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button className="bg-blue-900 hover:bg-blue-800">
            Консультация
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Профессиональная
            <br />
            <span className="text-blue-900">правовая защита</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Команда опытных юристов решает правовые вопросы любой сложности.
            Защищаем интересы частных лиц и бизнеса с 2010 года.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800 px-8">
              Бесплатная консультация
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-900 text-blue-900 hover:bg-blue-50"
            >
              Наши услуги
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h3>
            <p className="text-lg text-gray-600">
              Полный спектр юридических услуг для физических и юридических лиц
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Gavel" size={48} className="text-blue-900 mb-4" />
                <CardTitle>Представительство в суде</CardTitle>
                <CardDescription>
                  Защита ваших интересов во всех судебных инстанциях
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="FileText"
                  size={48}
                  className="text-blue-900 mb-4"
                />
                <CardTitle>Банкротство</CardTitle>
                <CardDescription>
                  Процедуры банкротства физических и юридических лиц
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Home" size={48} className="text-blue-900 mb-4" />
                <CardTitle>Жилищные споры</CardTitle>
                <CardDescription>
                  Решение вопросов с недвижимостью и ЖКХ
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Heart" size={48} className="text-blue-900 mb-4" />
                <CardTitle>Семейные споры</CardTitle>
                <CardDescription>
                  Развод, алименты, раздел имущества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Building"
                  size={48}
                  className="text-blue-900 mb-4"
                />
                <CardTitle>Корпоративное право</CardTitle>
                <CardDescription>
                  Регистрация, сопровождение бизнеса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Users" size={48} className="text-blue-900 mb-4" />
                <CardTitle>Трудовые споры</CardTitle>
                <CardDescription>
                  Защита трудовых прав работников и работодателей
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">
                О компании
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Более 13 лет мы помогаем клиентам решать правовые вопросы. Наша
                команда состоит из высококвалифицированных юристов с
                практическим опытом в различных отраслях права.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">500+</div>
                  <div className="text-gray-600">Выигранных дел</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">13</div>
                  <div className="text-gray-600">Лет опыта</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">15</div>
                  <div className="text-gray-600">Юристов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900">98%</div>
                  <div className="text-gray-600">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Получить консультацию
              </h4>
              <form className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Телефон" type="tel" />
                <Input placeholder="Email" type="email" />
                <Textarea
                  placeholder="Опишите вашу ситуацию"
                  className="min-h-[100px]"
                />
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h3>
            <p className="text-lg text-gray-600">
              Опытные юристы с многолетней практикой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gray-400" />
                </div>
                <CardTitle>Иванов Александр</CardTitle>
                <CardDescription>Управляющий партнер</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  15 лет опыта в гражданском и арбитражном процессе
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gray-400" />
                </div>
                <CardTitle>Петрова Елена</CardTitle>
                <CardDescription>Семейное право</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Специалист по семейным спорам и наследственному праву
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="User" size={48} className="text-gray-400" />
                </div>
                <CardTitle>Сидоров Михаил</CardTitle>
                <CardDescription>Корпоративное право</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Эксперт по корпоративному праву и сделкам M&A
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-6">Контакты</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Icon name="MapPin" size={24} />
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div>г. Москва, ул. Тверская, д. 15, оф. 301</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Phone" size={24} />
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div>+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Mail" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>info@pravovoi-shit.ru</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" size={24} />
                  <div>
                    <div className="font-semibold">Режим работы</div>
                    <div>Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-6">
                Записаться на консультацию
              </h4>
              <form className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  className="bg-white text-gray-900"
                />
                <Input
                  placeholder="Телефон"
                  type="tel"
                  className="bg-white text-gray-900"
                />
                <Textarea
                  placeholder="Вопрос"
                  className="bg-white text-gray-900 min-h-[100px]"
                />
                <Button className="w-full bg-white text-blue-900 hover:bg-gray-100">
                  Записаться
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" size={24} />
                <span className="text-xl font-bold">Правовой Щит</span>
              </div>
              <p className="text-gray-400">
                Профессиональная правовая защита с 2010 года
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Гражданское право</li>
                <li>Семейное право</li>
                <li>Корпоративное право</li>
                <li>Банкротство</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Команда</li>
                <li>Новости</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@pravovoi-shit.ru</li>
                <li>г. Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Правовой Щит. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
