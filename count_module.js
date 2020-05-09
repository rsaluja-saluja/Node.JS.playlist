var count = function(arr) {
	console.log("There are "+arr.length+" elements")
}
module.exports.add = function(a,b){
	var c=a+b;
	console.log("addition of numbers "+a+" and "+b+" is "+c);
}
var multi = function(a,b){
	var c=a*b;
	console.log("Multiplication of numbers "+a+" and "+b+" is "+c);
}

var pi=3.14;
module.exports.count = count;
//module.exports.add=add;
module.exports.multi=multi;
module.exports.pi=pi;

// module.exports = {
// 	func1 : function () {
// 		console.log('function1');
// 	},

// 	func2 : function () {
// 		console.log('function2');
// 	}
// }

