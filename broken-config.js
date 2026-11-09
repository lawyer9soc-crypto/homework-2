// 1. Исправлены кавычки у ключа name и убрана точка с запятой в конце строки
const configJson = '{"name":"Myzeit", "city":"Москва", "director":"Марина"}'; 
const config = JSON.parse(configJson);

const field = 'city';
// 2. Использованы квадратные скобки [field] для доступа к свойству через переменную
// 3. Использованы обратные кавычки (backticks) для работы шаблонных строк
console.log(`Город: ${config[field].toUpperCase()}`); 

// 4. В объекте config нет свойства leader, есть director
const { director } = config; 
console.log(`Руководитель: ${director.toUpperCase()}`);