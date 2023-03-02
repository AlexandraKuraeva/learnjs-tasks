//==Выведите чётные числа
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//Замените for на while
let i = 0;
while (i < 3) {
  console.log(`namber ${i}`);
  i++;
}

//Повторять цикл, пока ввод неверен
let num;
do {
  num = +prompt('Введите число');
} while (num <= 100 && num);

//Вывести простые числа

let n = prompt(`Введите максимальное число`, '');
out: for (let a = 2; a <= n; a++) {
  for (let b = 2; b < a; b++) {
    if (a % b == 0) continue out;
  }
  console.log(a);
}
