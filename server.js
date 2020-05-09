var http = require('http');

var server = http.createServer(function(req,res) {
	console.log("request received: "+req.url);
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('Hey Server!!!');
});

server.listen(3000,'127.0.0.1');
console.log("The server is listening to port 3000");