sayHi();
//sayBye();
//normal function statement
function sayHi () {
	console.log('hi');
}

sayHi();

//function expression
var sayBye = function() {
	console.log('bye');
}

sayBye();

//pass function as argument
console.log('pass function as argument');
function callFunction(fun) {
	fun();
}

callFunction(sayBye);
callFunction(sayHi);

function testFunct(){
	return "Test";
}
const test = testFunct `Hi`; 
console.log(test);
console.log(test.__proto__.__proto__.__proto__)

let byeObj = new sayBye;
console.log(byeObj.__proto__);
