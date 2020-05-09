var events = require("events")
 var myEventEmitter = new events.EventEmitter();

 myEventEmitter.on("someEvent",function(msg){
	 console.log(msg);
 })

 myEventEmitter.emit("someEvent","SomeEvent is raised");

 /////////////////////////////

 var util = require("util");

 var person = function(name) {
	 this.name = name;
 }
 util.inherits(person,events.EventEmitter);

 var james = new person("James");
 var mary = new person("Mary");
 var john = new person("John");

 var people = [james,mary,john];

 people.forEach(function(person) {
	 person.on("speak",function(msg) {
		 console.log(person.name+" said "+msg);
	 })
 })

 james.emit("speak","I am James!!");
 mary.emit("speak","I love apples!!!");
 john.emit("speak","I love oranges!")