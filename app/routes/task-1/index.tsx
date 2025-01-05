// App.tsx
import React from 'react';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 p-4 bg-gray-100">
      <header className="bg-green-700 text-white text-center py-4 rounded-md">
        Хедер
      </header>

      <main className="flex flex-1 gap-4">
        <div className="flex-1 flex flex-col gap-4 text-white">
          <div className="bg-green-900 size-full rounded-md pt-2 text-center">
            Контент
          </div>
          <section className="bg-green-900 size-full rounded-md pt-2 text-center">
            Секшн
          </section>
        </div>

        <aside className="w-1/3 bg-green-500 text-white p-4 rounded-md">
          Сайдбар
        </aside>
      </main>

      <section className="bg-green-400 text-white text-center py-4 rounded-md">
        Секция
      </section>

      <footer className="bg-green-700 text-white text-center py-4 rounded-md">
        Футер
      </footer>
    </div>
  );
};

export default Page;
