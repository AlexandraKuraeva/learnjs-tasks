//=======Сумма с помощью замыканий==============
function sum(a) {
  return function (b) {
    return a + b;
  };
}

console.log(sum(1)(2));

//=====Фильтрация с помощью функции===========
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)));

function inBetween(a, b) {
  return function (i) {
    return i >= a && i <= b;
  };
}

function inArray(arr) {
  return function (i) {
    return arr.includes(i);
  };
}

console.log(arr.filter(inArray([1, 2, 10])));

//====Сортировать по полю======
let users = [
  { name: 'John', age: 20, surname: 'Johnson' },
  { name: 'Pete', age: 18, surname: 'Peterson' },
  { name: 'Ann', age: 19, surname: 'Hathaway' },
];
function byField(features) {
  return function (a, b) {
    return a[features] > b[features] ? 1 : -1;
  };
}
console.log(users.sort(byField('age')));
console.log(users.sort(byField('name')));

//======Армия функций=========
function makeArmy() {
  let shooters = [];

  for (let i = 0; i < 10; i++) {
    let shooter = function () {
      console.log(i);
    };
    shooters.push(shooter);
  }

  return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
