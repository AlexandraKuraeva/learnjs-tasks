//1=============Декоратор-шпион==============

function work(a, b) {
  console.log(a + b); 
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  console.log('call:' + args.join()); 
}

//2===========Задерживающий декоратор=============
function f(x) {
  console.log(x);
}

function delay(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

//3================Декоратор debounce=============

let f = debounce(alert, 1000);
function debounce(f, ms) {
  return function () {
    let waiting = false;
    return function () {
      if (waiting) return;

      f.apply(this, arguments);

      waiting = true;

      setTimeout(() => (waiting = false), ms);
    };
  };
}

setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);


//4===========Тормозящий (throttling) декоратор==================
function f(a) {
  console.log(a);
}
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
     
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

