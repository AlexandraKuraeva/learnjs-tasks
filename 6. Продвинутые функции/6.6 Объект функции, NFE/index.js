//1====Установка и уменьшение значения счётчика========
function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  counter.set = (value) => {
    return (count = value);
  };

  counter.decrease = () => {
    return count--;
  };
  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10); // установить новое значение счётчика

console.log(counter()); // 10
console.log(counter());

counter.decrease(); // уменьшить значение счётчика на 1

console.log(counter()); // 10 (вместо 11)

//2=======Сумма с произвольным количеством скобок===========
function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}
JSON.parse - console.log(JSON.parse((sum(1)(2)))); 
