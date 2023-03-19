//1=========Скрыть элемент по нажатию кнопки==========
// document.getElementById('btn').onclick = function () {
//   document.getElementById('text').style.display = none;
// };

//2=========Спрятать себя=====================
// document.getElementById('btn').onclick = function () {
//   this.style.display = none;
// };
//4========Создать раскрывающееся меню========
let menuElem = document.querySelector('.ul-list');
let titleElem = document.querySelector('.title');
console.log(menuElem);

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
};

//5=========Удалить блок===================
let panes = document.querySelectorAll('.pane');
console.log(panes);

for (let pane of panes) {
  pane.insertAdjacentHTML('afterbegin', '<button class="remove-button">[x]</button>');
  // кнопка становится первым потомком плитки (pane)
  pane.firstChild.onclick = () => pane.remove();
}

//6=========Карусель=========================
let i = 1;
for (let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

let width = 130;
let count = 3;

let list = carousel.querySelector('.ul-car');
let listElems = carousel.querySelectorAll('.li-car');

let position = 0;

carousel.querySelector('.prev').onclick = function () {
  position += width * count;

  position = Math.min(position, 0);
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
  position -= width * count;

  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

//========================Делегирование=================================
//1

//  container.onclick = function (event) {
//    if (event.target.className != 'remove-button') return;

//    let pane = event.target.closest('.pane');
//    pane.remove();
//  };

//2
for (let li of tree.querySelectorAll('.anim')) {
  let span = document.createElement('span');
  li.prepend(span);
  span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
}

tree.onclick = function (event) {
  if (event.target.tagName != 'SPAN') {
    return;
  }

  let childrenContainer = event.target.parentNode.querySelector('ul');
  if (!childrenContainer) return;

  childrenContainer.hidden = !childrenContainer.hidden;
};

//===========Подсказка=============
let tooltipElem;

document.onmouseover = function (event) {
  let target = event.target;

  // если у нас есть подсказка...
  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  // ...создадим элемент для подсказки

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function (e) {
  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }
};

//===============Поймайте переход по ссылке==============
contents.addEventListener('click', (event) => {
  function handleLink(href) {
    let isLeaving = confirm(`Leave for ${href}?`);
    if (!isLeaving) return false;
  }

  let target = event.target.closest('a');

  if (target && contents.contains(target)) {
    return handleLink(target.getAttribute('href'));
  }
});


//=============Галерея=====================
thumbs.onclick = function (event) {
  let thumbnail = event.target.closest('a');

  if (!thumbnail) return;
  showThumbnail(thumbnail.href, thumbnail.title);
  event.preventDefault();
};

function showThumbnail(href, title) {
  largeImg.src = href;
  largeImg.alt = title;
}