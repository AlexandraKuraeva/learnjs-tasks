//1==========Вычислить сумму чисел до данного==========
//Цикл
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}
sumTo(10);
//Рекурсия
let sum = 0;
function sumTo2(n) {
  if (n === 0) return;
  sum = sum + n;

  sumTo2(n - 1);
}
sumTo2(100);
console.log(sum);

//по формуле
function sumTo(n) {
  return (n * (n + 1)) / 2;
}

//2===========Вычислить факториал================
let res = 1;
function facctorial(n) {
  if (n === 0) return 1;
  res = res * n;
  facctorial(n - 1);
}

facctorial(10);
console.log(res);

function facctorial2(n) {
  return n != 1 ? n * facctorial2(n - 1) : 1;
}
console.log(facctorial2(10));

//3=====Числа Фибоначчи==============
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
console.log(fib(7));

//4====Вывод односвязного списка=====

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

//Цикл
function printList(list) {
  let t = list;
  while (t) {
    console.log(t.value);
    t = t.next;
  }
}
// console.log(printList(list));

//Рекурсия
function printList2(list) {
  console.log(list.value);
  if (list.next) printList2(list.next);
}
// printList2(list);

//5====Вывод односвязного списка в обратном порядке=====
//Цикл
function printListRev(list) {
  let arr = [];
  let t = list;
  while (t) {
    arr.push(t.value);
    t = t.next;
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printListRev(list);

//Рекурсия
function printList2Rev(list) {
  if (list.next) {
    printList2Rev(list.next);
  }
  console.log(list.value);
}
printList2Rev(list);
