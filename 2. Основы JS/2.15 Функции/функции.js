//2======Перепишите функцию, используя оператор '?' или '||'======
function checkAge(age) {
  return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
  return age > 18 || confirm('Родители разрешили?');
}

//3=====Функция min(a, b)=======

function min(a, b) {
  return a > b ? b : a;
}
min(2, 5);

//4====Функция pow(x,n)=========
let x = prompt('x?', '');
let n = prompt('n?', '');

function pow(x, n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result
}
pow(x, n);