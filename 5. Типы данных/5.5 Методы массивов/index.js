//1=========Перевести  в camelCase=======
function camelize(str) {
  let arr = str.split('-');

  let camelCase = arr
    .map((word, index) => {
      return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join('');
  console.log(camelCase);
}
camelize('listStyleImage');

//2====Фильтрация по диапазону=================
let filterRange = (arr, a, b) => {
  let result = arr.filter((item) => {
    return item >= a && item <= b;
  });
  console.log(result);
};
1;
let arr = [5, 3, 8, 1, 1];

let filtered = filterRange(arr, 1, 5);

//3====Фильтрация по диапазону "на месте"=======
let arr2 = [5, 3, 8, 15, 3, 8, 1];
let filterRangeInPlace = (arr, a, b) => {
  for (let index = 0; index < arr.length; index++) {
    const elem = arr[index];

    if (elem < a || elem > b) {
      arr.splice(index, 1);

      index--;
    }
  }
};
filterRangeInPlace(arr2, 1, 5);

//4=======Сортировать в порядке по убыванию======
let arr3 = [5, 3, 8, 15, 3, 8, 1];
arr3.sort((a, b) => b - a);
console.log(arr3);

//5====Скопировать и отсортировать массив========
let arrWord = ['HTML', 'JavaScript', 'CSS'];
function copySorted(arr) {
  let newArrWord = arr.slice().sort();
  console.log(newArrWord);
}
copySorted(arrWord);

//6=====Создать расширяемый калькулятор==========

function Calculator() {
  this.methods = {
    '-': (a, b) => a - b,
    '+': (a, b) => a + b,
  };

  this.calculate = function (str) {
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

//7=========Трансформировать в массив имён==========

let names = users.map((item) => item.name);

console.log(names);

//8========Трансформировать в объекты================
let usersMapped = users.map((item) => ({
  fullName: `${item.name} ${item.surname} `,
  id: item.id,
}));
console.log(usersMapped);

//9=======Отсортировать пользователей по возрасту=======
let v = { name: 'Вася', age: 25 };
let p = { name: 'Петя', age: 30 };
let m = { name: 'Маша', age: 28 };
let users = [v, p, m];
function sortByAge(users) {
  users.sort((a, b) => (a.age > b.age ? 1 : -1));
  console.log(users);
}
sortByAge(users);
//10========Перемешайте массив=============
let arr5 = [1, 2, 3];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.round(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];

    console.log(array);
  }
}
shuffle(arr5);
//11==========Получить средний возраст==========
function getAverageAge(users) {
  return Math.round(users.reduce((acum, user) => acum + user.age, 0) / users.length);
}
//12=========Оставить уникальные элементы массива======
let strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'z', 'харе', 'кришна', 'кришна', ':-O'];
let uniqValue = [...new Set(strings)];
console.log(uniqValue);

//13 =====Создайте объект с ключами из массива=======
let userss = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(userss);

function groupById(array) {
  return array.reduce((obj, value) => {
  obj[value.id] = value;
  }, {});
}