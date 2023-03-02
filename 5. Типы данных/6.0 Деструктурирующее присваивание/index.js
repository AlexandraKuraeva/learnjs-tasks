//1=======Деструктурирующее присваивание========
let user = {
  name: 'John',
  years: 30,
};

let { name, years: age, isAdmin = false } = user;

//2========Максимальная зарплата=================

let salaries = {
  John: 100,
  Pete: 3000,
  Mary: 850,
};

let topSalary = (salaries) => {
  if (Object.entries(salaries).length === 0) return null;
  let max = 0;
  let name;
  for (let [key, value] of Object.entries(salaries)) {
    if (value > max) {
      max = value;
      name = key;
    }
  }
  return name;
};

console.log(topSalary(salaries));

