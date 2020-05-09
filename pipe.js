var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/stream_data.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/stream_write_pipe.txt');

// myReadStream.pipe(myWriteStream);

var http = require('http');

var server = http.createServer(function(req,res) {
	console.log("request received: "+req.url);
	//res.writeHead(200,{'Content-Type':'text/plain'});
	//res.end('Hey Server!!!');
	// var myReadStream = fs.createReadStream(__dirname+'/stream_data.txt','utf8');

	res.writeHead(200,{'Content-Type':'text/html'});
	var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
	myReadStream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log("The server is listening to port 3000");