//1===============================
function calcSum() {
  let sum;
  let x = +prompt('Введите первое число');
  let y = +prompt('Введите второе число');
  return (sum = x + y);
}

calcSum();

//2================================
Math.round(6.35 * 10) / 10;

//3================================
function readNumber() {
  let num;
  do {
    num = +prompt('Введите число');
  } while (!isFinite(num));
  if (num === null || num === '') return null;
  return num;
}
readNumber();

//5================================

function random(min, max) {
  return min + Math.random() * (max - min);
}

//6================================
const randomNum = (min, max) => {
   let num = Math.floor(Math.random() * (max - min + 1)) + min;
	return num;
};
console.log(randomNum(2,80))
