//1======Фильтрация уникальных элементов массива========
let values = ['Hare', 'Krishna', 1, 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];
function unique(arr) {
  return [...new Set(arr)];
}
console.log(unique(values));

//2=========Отфильтруйте анаграммы====================
let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
let aclean = (arr) => {
  let map = new Map();
  for (let item of arr) {
    let sorted = item.toLowerCase().split('').sort().join('');
    map.set(sorted, item);
  }
  return [...map.values()];
};

console.log(aclean(arr));

//3============Перебираемые ключи======================
let map1 = new Map();

map1.set('name', 'John');

let keys = [...map1.keys()];
keys.push('more');

console.log(keys);
