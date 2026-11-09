const exhibit = {
  title: 'Восток-1',
  location: {
    hall: 'Космос',
    floor: 2
  },
  year: 1961
};

// 1. Вывод зала и этажа через путь к вложенным свойствам
console.log(`Зал: ${exhibit.location.hall}`);
console.log(`Этаж: ${exhibit.location.floor}`);

// 2. Получение массива названий верхнего уровня и перебор через forEach
const keys = Object.keys(exhibit);
keys.forEach((key) => {
  console.log(`Свойство: ${key}`);
});

// 3. Берем последнее название и читаем значение через переменную
const lastName = keys[keys.length - 1];
console.log(`Значение ${lastName}: ${exhibit[lastName]}`);