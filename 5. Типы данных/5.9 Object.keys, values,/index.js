//1==========Сумма свойств объекта=============
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(salaries) {
  let sum = 0;
  for (let salarie of Object.values(salaries)) {
    console.log(salarie);
    sum += salarie;
  }
  return sum;
}
console.log(sumSalaries(salaries));
//2========Подсчёт количества свойств объекта==========
let user = {
  name: 'John',
  age: 30,
};
console.log(Object.entries(user).length);
