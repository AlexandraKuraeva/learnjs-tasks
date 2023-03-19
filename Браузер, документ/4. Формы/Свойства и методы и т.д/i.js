//===================Добавьте пункт к выпадающему списку==========
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

//2--------------------------------
let newOption = new Option('Классика', 'classic');
genres.append(newOption);

//3------------------------------------
newOption.selected = true;

//======================Редактируемый div==============================
view.onclick = function () {
  editStart();
};

function editStart() {
  area = document.createElement('textarea');
  area.className = 'edit'; //назначить тот же класс, что и на div
  area.value = view.innerHTML;

  area.onkeydown = function (event) {
    if (event.key == 'Enter') {
      this.blur();
    }
  };

  area.onblur = function () {
    editEnd();
  };

  view.replaceWith(area);
  area.focus();
}

function editEnd() {
  view.innerHTML = area.value;
  area.replaceWith(view);
}

//===================Задача про перемещение мыши=======================
mouse.tabIndex = 0; //установить tabIndex

mouse.onclick = function () {
  this.style.left = this.getBoundingClientRect().left + 'px'; // Получаем расположение элемента
  this.style.top = this.getBoundingClientRect().top + 'px';

  this.style.position = 'fixed';
};
// При клике на клавиши, обробатываем событие
mouse.onkeydown = function (e) {
  switch (e.key) {
    case 'ArrowLeft':
      this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px'; //parseInt() возвращает целое число из строки символов
      return false;
    case 'ArrowUp':
      this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
      return false;
    case 'ArrowRight':
      this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
      return false;
    case 'ArrowDown':
      this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
      return false;
  }
};

//===================Депозитный калькулятор=======================
let form = document.forms.calculator; //Получить форму

form.money.oninput = calculate; // вызов функции calculate на все(oninput, onchange) обработчики события
form.months.onchange = calculate;
form.interest.oninput = calculate;

function calculate() {
  let initial = +form.money.value;
  if (!initial) return;

  let interest = form.interest.value * 0.01;

  if (!interest) return;

  let years = form.months.value / 12;
  if (!years) return;

  let result = Math.round(initial * (1 + interest) ** years);
  // устанавливает высоту диаграмм
  let height = (result / form.money.value) * 100 + 'px';
  document.getElementById('height-after').style.height = height;
  document.getElementById('money-before').innerHTML = form.money.value;
  document.getElementById('money-after').innerHTML = result;
}

//==============================Модальное диалоговое окно с формой==============================================
document.getElementById('show-button').addEventListener('click', function () {
  showPrompt('Введите что-нибудь<br>...умное :)', function (value) {
    alert('Вы ввели: ' + value);
  });
});

function showPrompt(text, callback) {
  showCover();
  let form = document.getElementById('prompt-form');
  let container = document.getElementById('prompt-form-container');
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    document.onkeydown = null;
    callback(value);
  }

  form.onsubmit = function () {
    let value = form.text.value;
    if (value == '') return false; // игнорируем отправку пустой формы

    complete(value);
    return false;
  };

  form.cancel.onclick = function () {
    complete(null);
  };

  document.onkeydown = function (e) {
    if (e.key == 'Escape') {
      complete(null);
    }
  };

  let lastElem = form.elements[form.elements.length - 1];
  let firstElem = form.elements[0];

  lastElem.onkeydown = function (e) {
    if (e.key == 'Tab' && !e.shiftKey) {
      firstElem.focus();
      return false;
    }
  };

  firstElem.onkeydown = function (e) {
    if (e.key == 'Tab' && e.shiftKey) {
      lastElem.focus();
      return false;
    }
  };

  container.style.display = 'block';
  form.elements.text.focus();
}

function showCover() {
  let coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';

  // убираем прокрутку
  document.body.style.overflowY = 'hidden';
  //добавляем блок coverDiv на страницу
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}
