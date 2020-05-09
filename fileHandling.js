var fs = require("fs");

//Sync read/write
var readMe = fs.readFileSync('readme.txt','utf8');
//console.log(readMe);

fs.writeFileSync('writeme.txt',readMe);

//Asyn read/write
var readAsyn = fs.readFile('readme.txt','utf8',function(err,data) {
	//console.log(data);
	fs.writeFile('writeme.txt',data,function(err){});
});
console.log("test");
