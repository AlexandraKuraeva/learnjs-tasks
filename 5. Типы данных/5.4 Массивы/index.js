//2====Операции с массивами============
let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[Math.round((styles.length - 1) / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');

console.log(styles);

//4====Сумма введенных чисел======

function sumInput() {
  let arr = [];

  while (true) {
    let value = prompt('Введите значение');

    if (value === '' || value === null || !isFinite(value)) break;
    arr.push(+value);
  }

  let sum = 0;
  arr.forEach((num) => {
    sum += num;
  });
  return sum;
}
console.log(sumInput());

//5======Подмассив наибольшей суммы(+вернет наибольшее значение массива :)============
let arr = [100, -9, 200, -3, 5];

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partSum = 0;
  arr.forEach((i) => {
    partSum += i;
    if (i < 0) partSum = 0;
    maxSum = Math.max(partSum, maxSum);
  });
  console.log(maxSum);
}
getMaxSubSum(arr);
