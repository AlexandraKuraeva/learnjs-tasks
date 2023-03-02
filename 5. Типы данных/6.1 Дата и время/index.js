//1=======Создайте дату=================
let date = new Date(2012, 1, 20, 3, 12);

console.log(date);

//2=========Покажите день недели=========
let date2 = new Date(2012, 0, 3);

function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
  return days[date.getDay()];
}

console.log(getWeekDay(date2));

//3=========День недели в европейской нумерации=========
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day;
}

console.log(getLocalDay(date2));

//4=====Какой день месяца был много дней назад?==========
let date3 = new Date(2015, 0, 2);

function getDateAgo(date, days) {
  let clonDate = new Date(date);
  console.log(clonDate);

  clonDate.setDate(date.getDate() - days);
  return clonDate.getDate();
}
console.log(getDateAgo(date3, 2));

//5=====Последнее число месяца?==========
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

//6=====Сколько сегодня прошло секунд?=======
function getSecondsToday() {
  let dateNow = new Date();
  let seconds = dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds();
  return seconds;
}

console.log(getSecondsToday());

//7=====Сколько секунд осталось до завтра?=======
function getSecondsToTomorrow() {
  let dateNow = new Date();
  let secondsPassed = dateNow.getHours() * 3600 + dateNow.getMinutes() * 60 + dateNow.getSeconds();
  let result = 86400 - secondsPassed;
  return result;
}

console.log(getSecondsToTomorrow());

console.log(new Date() - 1);

//7=====Форматирование относительной даты=======
function formatDate(date) {
  let diff = new Date() - date;
  console.log(date);

  if (diff < 1000) return 'прямо сейчас';

  let sec = Math.floor(diff / 1000);
  if (sec < 60) return `${sec} сек. назад`;

  let min = Math.floor(diff / 1000 / 60);

  if (min < 60) return `${min} мин. назад`;

  let arrDate = date;
  arrDate = [
    '0' + date.getDate(),
    '0' + date.getMonth() + 1,
    ' ' + date.getFullYear(),
    '0' + date.getHours(),
    '0' + date.getMinutes(),
  ];
  console.log(arrDate);
  let newArr = []
  arrDate.map((component) => {
    newArr.push(component.slice(-2));
  });
  console.log(newArr)
  return newArr.slice(0, 3).join('.') + ' ' + newArr.slice(3).join(':');
}

console.log(formatDate(new Date(new Date() - 86400 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
