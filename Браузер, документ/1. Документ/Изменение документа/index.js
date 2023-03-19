//=========================================Изменение документа================================================
//1===Очистите элемент=========
function clear(elem) {
  elem.innerHTML = '';
}

//2=====Создайте список========
let listUl = document.createElement('ul');
document.body.append(listUl);

while (true) {
  //   let data = prompt('Введите элемент списка', '');

  if (!data) {
    break;
  }

  let li = document.createElement('li');
  li.textContent = data;
  listUl.append(li);
}

//3===========Создайте дерево из объекта===============
function createTree(container, obj) {
  container.append(createTreeList(obj));
}

function createTreeList(obj) {
  let ul = document.createElement('ul');
  for (let key in obj) {
    let li = document.createElement('li');
    li.textContent = key;
    if (typeof obj[key] === 'object') {
      li.appendChild(createTreeList(obj[key]));
    }
    ul.appendChild(li);
  }
  return ul;
}

let container = document.getElementById('container');
createTree(container, data);

//4=========Выведите список потомков в дереве==============
let list1 = document.querySelectorAll('li');
for (let li of list1) {
  let itemsCount = li.getElementsByTagName('li').length;
  if (!itemsCount) continue;

  li.firstChild.data += ' [' + itemsCount + ']';
}

//5=====Создайте календарь в виде таблицы===================
function getDay(date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}

let createCalendar = (elem, year, month) => {
  let table =
    '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

  let mon = month - 1;
  let d = new Date(year, mon);

  for (let i = 0; i < getDay(d); i++) {
    table += '<td></td>';
  }

  while (d.getMonth() == mon) {
    table += '<td>' + d.getDate() + '</td>';

    if (getDay(d) % 7 == 6) {
      table += '</tr><tr>';
    }

    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) != 0) {
    for (let i = getDay(d); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  elem.innerHTML = table;
};

createCalendar(calendar, 2023, 3);

//6===========Цветные часы с использованием setInterval==============
let timerId;
let start = document.getElementById('start');
let stop = document.getElementById('stop');

start.addEventListener('click', clockStart);
stop.addEventListener('click', clockStop);

function update() {
  let clock = document.getElementById('clock');
  let date = new Date();

  let hours = date.getHours();
  if (hours < 10) hours = '0' + hours;
  clock.children[0].innerHTML = hours;

  let minutes = date.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  clock.children[1].innerHTML = minutes;

  let seconds = date.getSeconds();
  if (seconds < 10) seconds = '0' + seconds;
  clock.children[2].innerHTML = seconds;
}

function clockStart() {
  if (!timerId) {
    timerId = setInterval(update, 1000);
  }
  update();
}

 function clockStop() {
   clearInterval(timerId);
   timerId = null; 
 }


 //7=======Вставьте HTML в список=================
 one.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');

 //8==========Сортировка таблицы=========================
 let sortedRows = Array.from(table.rows)
   .slice(1)
   .sort((rowA, rowB) => (rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1));

 table.tBodies[0].append(...sortedRows);
