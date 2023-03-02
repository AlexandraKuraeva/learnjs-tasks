//Проверка значения из диапазона

let age = +prompt('Введите число');
if (age >= 14 && age <= 90) console.log('Hаходится в диапазоне между 14 и 90');
else console.log('Не находится в диапазоне между 14 и 90');

//Проверка значения вне диапазона
//1
let age2 = +prompt('Введите число');
if (!(age >= 14 && age <= 90)) console.log('Не находится в диапазоне между 14 и 90');
else console.log('Находится в диапазоне между 14 и 90');

//второй вариант
// if (age < 14 || age > 90)

//Проверка логина
let userName = prompt('Введите логин');

if (userName === 'Админ') {
  let password = prompt('Пароль?', '');
  if (password === 'Я главный') {
    console.log('Здравствуйте!');
  } else if (password === null || password === "") {
    console.log('Отменено');
  } else console.log('Неверный пароль');
} else if (userName === '' || userName === null) {
  console.log('Отменено');
} else console.log('Я вас не знаю');
