//1==Напишите "if", аналогичный "switch"=========
if (browser == 'Edge') {
  console.log("You've got the Edge!");
} else if (
  browser == 'Chrome' ||
  browser == 'Firefox' ||
  browser == 'Safari' ||
  browser == 'Opera'
) {
  console.log('Okay we support these browsers too');
} else {
  console.log('We hope that this page looks ok!');
}

//2==Переписать условия "if" на "switch"=======
const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
  case 0:
    console.log('Вы вывели число 0');
    break;

  case 1:
    console.log('Вы вывели число 1');
    break;
  case 2 || 3:
    console.log('Вы ввели число 2, а может и 3');
    break;
}
