// 1======================
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

console.log(user);

// 2======================
let isEmpty = (obj) => {
  for (let a in obj) {
    return false;
  }
  return true;
};
console.log(isEmpty(user));

// 3======================
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let a in salaries) {
  sum += salaries[a];
}
console.log(sum);

// 4======================

let multiplyNumeric = (obj) => {
  for (let prop in obj) {
    if (typeof obj[prop] == 'number') {
      obj[prop] *= 2;
    }
  }
  console.log(obj);
};
console.log(multiplyNumeric(salaries));

