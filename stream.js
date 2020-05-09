var fs = require('fs');

//if utf8 not passed it would write binay data
var myReadStream = fs.createReadStream(__dirname+'/stream_data.txt','utf8');

var myWriteStream = fs.createWriteStream(__dirname+'/stream_write.txt');

myReadStream.on('data',function(chunk) {
	console.log("New Chunk Received");
	console.log(chunk);
	myWriteStream.write(chunk);
});

myReadStream.on('end',function(){
	console.log("reached end of file");
	myWriteStream.write("End of Stream");
})