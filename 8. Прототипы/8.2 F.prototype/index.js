//1=====Создайте новый объект с помощью уже существующего==========
// Сработает
function Fun(a){
	console.log(a)
}
let f1 = new Fun("a");
let f2 = new f1.constructor("a");

//Не сработает, т. к. перезаписанно свойство prototype

function Fun(b) {
  console.log(b);
}
Fun.prototype = {}; //перезаписанно свойство prototype

let f3 = new Fun("b");
let f4 = new f3.constructor("b");