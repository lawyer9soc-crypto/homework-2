const catalogJson = `[
  {"title":"Солярис","year":1961},
  {"title":"Мы","year":1924},
  {"title":"Пикник на обочине","year":1972}
]`;

// 1. Превращаем JSON-строку в массив объектов
const books = JSON.parse(catalogJson);

// 2. Оставляем только книги с годом >= 1950
const filteredBooks = books.filter(book => book.year >= 1950);

// 3. Превращаем массив объектов в новый массив (используя деструктуризацию)
const mappedBooks = filteredBooks.map(({ title, year }) => ({ title, year }));

// 4. Превращаем результат обратно в JSON-строку
const resultJson = JSON.stringify(mappedBooks);

// 5. Выводим результат
console.log(`Подходящих книг: ${mappedBooks.length}`);
console.log(resultJson);

// 6. Проверяем, что полученную строку можно прочитать обратно
const check = JSON.parse(resultJson);
console.log(`Проверка: ${check.length}`);
