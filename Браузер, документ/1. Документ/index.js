//1==Дочерние элементы в DOM====
document.body.children[0];
document.body.children[1];
document.body.lastElementChild.lastElementChild;

//2==Выделите ячейки по диагонали====
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  let row = table.rows[i];
  row.cells[i].style.backgroundColor = 'red';
}

//3====Поиск элементов========
let table2 = document.getElementById('age-table');
document.querySelectorAll('#age-table label');
table.querySelector('td');
document.querySelector('form[name="search"]');
form.querySelector('input');
let inputs = form.querySelectorAll('input');
inputs[inputs.length - 1];

//4====Считаем потомков========
let list = document.querySelectorAll('li');
for (let li of list) {
  let item = li.firstChild.data;
  let count = li.getElementsByTagName('li').length;
  alert(`${item}: ${count}`);
}

//5=====Получите атрибут=========
let elem = document.querySelector('[data-widget-name]');
console.log(elem.dataset.widgetName);

//6====Сделайте внешние ссылки оранжевыми======
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach((link) => (link.style.color = 'orange'));

//или так

const links2 = document.querySelectorAll('a');
const externalLinks = Array.from(links2).filter((link) => {
  return link.href.includes('://') && !link.href.includes(location.hostname);
});

externalLinks.forEach((a) => (a.style.color = 'orange'));

//======================================Стили и классы====================================

//1==========Создать уведомление==========================
function showNotification({ top = 0, right = 0, className, html }) {
  let notification = document.createElement('div');
  notification.className = 'notification';
  if (className) {
    notification.classList.add(className);
  }

  notification.style.top = top + 'px';
  notification.style.right = right + 'px';

  notification.innerHTML = html;
  document.body.append(notification);
  setTimeout(() => notification.remove(), 1500);
}
 let i = 1;
 setInterval(() => {
   showNotification({
     top: 10,
     right: 10,
     html: 'Hello ' + i++,
     className: 'welcome',
   });
 }, 2000);

 //======================================Размер окна и прокрутки========================
 //1==========Найти размер прокрутки снизу========================
 let scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

 //2==========Узнать ширину полосы прокрутки====================
 let scrollWidth = div.offsetWidth - div.clientWidth;

 //3==========Поместите мяч в центр поля===========================
//  так же необходимо указать размеры изображения в html 
  ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
  ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';

//=========================================Координаты============================
//=====Найдите координаты точек относительно окна браузера==============
let coords = elem.getBoundingClientRect();

let corner1 = [coords.left, coords.top];
let corner2 = [coords.right, coords.bottom];
let corner3 = [coords.left + field.clientLeft, coords.top + field.clientTop];
let corner4 = [
  coords.left + elem.clientLeft + elem.clientWidth,
  coords.top + elem.clientTop + elem.clientHeight,
];

//============Покажите заметку рядом с элементом================
 function positionAt(anchor, position, elem) {
   let anchorCoords = anchor.getBoundingClientRect();

   switch (position) {
     case 'top':
       elem.style.left = anchorCoords.left + 'px';
       elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
       break;

     case 'right':
       elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px';
       elem.style.top = anchorCoords.top + 'px';
       break;

     case 'bottom':
       elem.style.left = anchorCoords.left + 'px';
       elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px';
       break;
   }
 }


 function showNote(anchor, position, html) {
   let note = document.createElement('div');
   note.className = 'note';
   note.innerHTML = html;
   document.body.append(note);

   positionAt(anchor, position, note);
 }

//=============Покажите заметку около элемента============
//К предыдущему ответу добавить функцию и в CSS для нужного эл. position:absolute
 function getCoords(elem) {
   let box = elem.getBoundingClientRect();

   return {
     top: box.top + scrollY,
     left: box.left + scrollX,
   };
 }