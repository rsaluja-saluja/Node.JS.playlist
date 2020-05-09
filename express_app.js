var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send('Home Page');
});

app.get('/contact', function(req,res) {
//	res.send('Contact Page');
res.sendFile(__dirname+'/index.html');
});

app.get('/profile/:id',function(req,res) {
	res.send('Profile with id: '+ req.params.id+' is requested');
})
app.listen(3000)