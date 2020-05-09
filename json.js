var http = require('http');

var server = http.createServer(function(req,res) {
	console.log("request received: "+req.url);
	res.writeHead(200,{'Content-Type':'application/json'});
	var myObj = {
		name : 'Rajni',
		age : 35,
		designation: 'Software Engineer'
	};
	res.end(JSON.stringify(myObj));
});

server.listen(3000,'127.0.0.1');
console.log("The server is listening to port 3000");