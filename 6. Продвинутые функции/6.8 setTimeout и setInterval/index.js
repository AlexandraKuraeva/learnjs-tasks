//1===Вывод каждую секунду=========

//setTimeout
function printNumbers(from, to) {
  let count = from;

  setTimeout(function go() {
    console.log(count);
    if (to > count) {
      setTimeout(go, 1000);
    }
    count++;
  }, 1000);
}

printNumbers(1, 5);

//setInterval
function printNumbers2(from, to) {
  let count = from;

  let timerId = setInterval(function go() {
    console.log(count);
    if (to === count) {
      clearInterval(timerId);
    }
    count++;
  }, 1000);
}

printNumbers2(1, 5);
