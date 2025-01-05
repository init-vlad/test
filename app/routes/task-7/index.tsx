// src/components/WelcomePage.tsx

import React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 flex flex-col items-center justify-start p-12 text-white">
      {/* Заголовок */}
      <header className="w-full text-center py-16">
        <h1 className="text-5xl font-bold mb-4">
          Добро пожаловать на наш сайт!
        </h1>
        <p className="text-xl">
          Мы рады видеть вас здесь. Исследуйте наши возможности и узнайте больше
          о нас.
        </p>
      </header>

      {/* Основной контент */}
      <main className="w-full max-w-7xl">
        {/* Секция Услуг */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Наши Услуги
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Карточка 1 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">Веб-разработка</h3>
              <p>
                Создаем современные и адаптивные веб-сайты, отвечающие всем
                требованиям вашего бизнеса.
              </p>
            </div>

            {/* Карточка 2 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Цифровой Маркетинг
              </h3>
              <p>
                Разрабатываем эффективные маркетинговые стратегии для
                продвижения вашего бренда в интернете.
              </p>
            </div>

            {/* Карточка 3 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Поддержка и Обслуживание
              </h3>
              <p>
                Обеспечиваем круглосуточную поддержку и техническое обслуживание
                ваших проектов.
              </p>
            </div>
          </div>
        </section>

        {/* Секция Преимуществ */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Почему выбирают нас
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Преимущество 1 */}
            <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300 mb-12 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">Опытная Команда</h3>
              <p>
                Наша команда состоит из профессионалов с многолетним опытом в
                сфере IT и маркетинга.
              </p>
            </div>

            {/* Преимущество 2 */}
            <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300 mb-12 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4">
                Индивидуальный Подход
              </h3>
              <p>
                Мы тщательно изучаем потребности каждого клиента, чтобы
                предложить наилучшие решения.
              </p>
            </div>

            {/* Преимущество 3 */}
            <div className="flex-1 bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4">
                Качество и Надежность
              </h3>
              <p>
                Мы гарантируем высокое качество наших услуг и надежность в
                выполнении проектов.
              </p>
            </div>
          </div>
        </section>

        {/* Секция Отзывов */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Отзывы Клиентов
          </h2>
          <div className="space-y-12">
            {/* Отзыв 1 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300">
              <p className="italic mb-4">
                "Отличная команда! Благодаря им наш сайт стал популярным и
                привлек много новых клиентов."
              </p>
              <p className="text-right">— Анна Иванова, ООО "Пример"</p>
            </div>

            {/* Отзыв 2 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300">
              <p className="italic mb-4">
                "Профессиональный подход и внимание к деталям. Рекомендую всем,
                кто ищет надежных партнеров."
              </p>
              <p className="text-right">— Сергей Петров, ЗАО "Тест"</p>
            </div>

            {/* Отзыв 3 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-8 hover:bg-opacity-25 transition duration-300">
              <p className="italic mb-4">
                "Благодаря их маркетинговым стратегиям наш бизнес вырос в
                несколько раз за короткий срок."
              </p>
              <p className="text-right">— Мария Смирнова, ИП "Маркет"</p>
            </div>
          </div>
        </section>

        {/* Секция Блога */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold mb-12 text-center">Наш Блог</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Статья 1 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:bg-opacity-25 transition duration-300">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Тенденции Веб-Дизайна 2025"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Тенденции Веб-Дизайна 2025
                </h3>
                <p className="mb-4">
                  Узнайте о последних тенденциях в веб-дизайне, которые помогут
                  вашему сайту выглядеть современно и привлекательно.
                </p>
                <a href="#" className="text-blue-300 hover:underline">
                  Читать далее →
                </a>
              </div>
            </div>

            {/* Статья 2 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:bg-opacity-25 transition duration-300">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Эффективные Стратегии Цифрового Маркетинга"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Эффективные Стратегии Цифрового Маркетинга
                </h3>
                <p className="mb-4">
                  Откройте для себя проверенные стратегии цифрового маркетинга,
                  которые помогут вашему бизнесу расти.
                </p>
                <a href="#" className="text-blue-300 hover:underline">
                  Читать далее →
                </a>
              </div>
            </div>

            {/* Статья 3 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg overflow-hidden hover:bg-opacity-25 transition duration-300">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Как Выбрать Правильного Партнера по Разработке"
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Как Выбрать Правильного Партнера по Разработке
                </h3>
                <p className="mb-4">
                  Советы по выбору надежного партнера для разработки вашего
                  следующего веб-проекта.
                </p>
                <a href="#" className="text-blue-300 hover:underline">
                  Читать далее →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Призыв к действию */}
        <section className="text-center mb-24">
          <h2 className="text-3xl font-semibold mb-6">Готовы начать?</h2>
          <p className="mb-12">
            Свяжитесь с нами сегодня и узнайте, как мы можем помочь вашему
            бизнесу достичь новых высот.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition duration-300"
          >
            Связаться с нами
          </a>
        </section>
      </main>

      {/* Подвал */}
      <footer className="w-full text-center py-8 bg-white bg-opacity-20 backdrop-blur-md mt-auto">
        <p>
          &copy; {new Date().getFullYear()} Ваша Компания. Все права защищены.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            {/* Facebook Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            {/* Twitter Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.942 13.942 0 011.671 3.149a4.916 4.916 0 001.523 6.573 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.945 13.945 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-300 transition duration-300"
          >
            {/* Instagram Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.003.248 2.482.415a4.92 4.92 0 011.675 1.092 4.92 4.92 0 011.092 1.675c.167.479.359 1.276.415 2.482.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.248 2.003-.415 2.482a4.92 4.92 0 01-1.092 1.675 4.92 4.92 0 01-1.675 1.092c-.479.167-1.276.359-2.482.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.003-.248-2.482-.415a4.92 4.92 0 01-1.675-1.092 4.92 4.92 0 01-1.092-1.675c-.167-.479-.359-1.276-.415-2.482C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.248-2.003.415-2.482a4.92 4.92 0 011.092-1.675 4.92 4.92 0 011.675-1.092c.479-.167 1.276-.359 2.482-.415C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.07 5.77.127 4.672.325 3.758.707 2.843 1.089 2.03 1.655 1.292 2.392.555 3.129.988 3.942 1.37 4.857c.382.914.58 2.012.637 3.294C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.07 4.948.057 1.282.255 2.38.637 3.294.382.915.815 1.728 1.552 2.465.737.737 1.55 1.17 2.465 1.552.914.382 2.012.58 3.294.637 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.282-.057 2.38-.255 3.294-.637.915-.382 1.728-.815 2.465-1.552.737-.737 1.17-1.55 1.552-2.465.382-.914.58-2.012.637-3.294.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.057-1.282-.255-2.38-.637-3.294-.382-.915-.815-1.728-1.552-2.465-.737-.737-1.55-1.17-2.465-1.552-.914-.382-2.012-.58-3.294-.637C15.668.013 15.259 0 12 0z" />
              <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
              <circle cx="18.406" cy="5.594" r="1.44" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WelcomePage;
