var fs = require('fs');

//fs.mkdirSync('test');

//fs.rmdirSync('test')

fs.mkdir('test', function() {
	fs.readFile('readme.txt', 'utf8', function(err,data) {
		fs.writeFile('./test/writeme.txt',data,function(){});
	});
});
