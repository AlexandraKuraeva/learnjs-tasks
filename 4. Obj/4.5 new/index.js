//1========================================
let obj = {};
function A() {
  return obj;
}
function B() {
  return obj;
}

let a = new A();
let b = new B();

alert(a == b);

//2========================================
function Calculator() {
  (this.read = function () {
    this.a = +prompt('a');
    this.b = +prompt('b');
  }),
    (this.sum = function () {
      return this.a + this.b;
    }),
    (this.mul = function () {
      return this.a * this.b;
    });
}

let calculator = new Calculator();
calculator.read();

alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());

//3=================================
function Accumulator(startingValue) {
  (this.value = startingValue),
    (this.read = function () {
      this.value += +prompt('Ввдите число');
    });
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);
