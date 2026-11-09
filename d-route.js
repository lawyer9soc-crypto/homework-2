// 1. Создаем сложный объект route
const route = {
  number: 'M7',
  start: { 
    city: 'Москва', 
    stop: 'Киевский вокзал' 
  },
  finish: { 
    city: 'Калуга', 
    stop: 'Площадь Победы' 
  },
  minutes: 180
};

// 2. Деструктуризация верхнего уровня
// Мы достаем number, start, finish, minutes в отдельные переменные
const { number, start, finish, minutes } = route;

// 3. Собираем объект summary
const summary = {
  route: number,       // номер маршрута
  from: start.city,    // город отправления (из вложенного объекта start)
  to: finish.city,     // город прибытия (из вложенного объекта finish)
  minutes: minutes     // время в пути
};

// 4. Превращаем summary в JSON-строку
const summaryJson = JSON.stringify(summary);

// 5. Вывод
console.log(`Маршрут: ${number}`);
console.log(`Отправление: ${start.stop}`); // Берем остановку из start
console.log(summaryJson);

// 6. Проверка: парсим JSON обратно и достаем город прибытия
const parsedSummary = JSON.parse(summaryJson);
console.log(`Проверка: ${parsedSummary.to}`);
