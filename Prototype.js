let car = function(model) {
	this.model = model;
	// getModel = function(){
	// 	return this.model;
	// }
}
car.prototype.getModel = function() {
	return this.model;
};
let car1 = new car("Santro");
console.log(car1.getModel());

let car2 = new car("Esteem");
console.log(car2.getModel());