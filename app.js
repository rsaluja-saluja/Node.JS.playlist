console.log("Hello World")
console.log(__dirname);
console.log(__filename);

setTimeout(function(){
	console.log('3 second has passed')
},3000);

time=0;
var timer = setInterval(() => {
	time = time+2;
	console.log(time+' seconds has passed');
	if(time > 7) {
		clearInterval(timer);
	}

}, 2000);