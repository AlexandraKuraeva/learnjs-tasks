// 1======================
let calculator = {
  read() {
    this.a = +prompt('Enter the first number');
    this.b = +prompt('Enter the second number');
  },
  sum() {
    return `Sum of ${this.a} and ${this.b} is ${this.a + this.b} `;
  },
  mul() {
    return `Product of numbers ${this.a} and ${this.b} is ${this.a + this.b} `;
  },
};

calculator.read();

// 2======================
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    console.log(this.step);
    return this;
  },
};
