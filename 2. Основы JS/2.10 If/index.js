//2=========
let q = prompt('Какое «официальное» название JavaScript?', ' ');
q === 'ECMAScript' ? console.log('Верно!') : console.log('Не знаете? ECMAScript!');

//3=========
let a = +prompt('Введите число');
a > 0 ? console.log(1) : a < 0 ? console.log(-1) : 0;

//4=====Перепишите 'if' в '?'=========
let result = a + b < 4 ? 'Мало' : 'Много';

//5====Перепишите 'if..else' в '?'=======
let message =
  login == 'Сотрудник'
    ? (message = 'Привет')
    : login == 'Директор'
    ? (message = 'Здравствуйте')
    : login == ''
    ? (message = 'Нет логина')
    : (message = '');
