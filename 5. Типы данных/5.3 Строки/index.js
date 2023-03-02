//1===Сделайте первый символ заглавным====
function ucFirst(str) {
  let res = str !== '' ? str[0].toUpperCase() + str.slice(1) : 'Строка пуста';
  return res;
}
console.log(ucFirst('hi'));

//2===Проверка на спам========================
let checkSpam = (str) => {
  let result = str.toLowerCase();
  console.log(result);
  return result.includes('viagra') || result.includes('xx');
};

console.log(checkSpam('XXX'));

//3===Усечение строки=========================
let truncate = (str, maxlength) => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '...' : str;
};

console.log(truncate('Всем привет!', 8));
//4====Выделить число=========================
function extractCurrencyValue(str){
	return str.slice(1)
}
console.log(extractCurrencyValue("$120666"));