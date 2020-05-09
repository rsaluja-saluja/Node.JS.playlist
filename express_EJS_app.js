var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({extended : false});

app.set('view engine','ejs');
app.use('/assets',express.static('assets')); //style sheet was not working directly so used express middleware

app.get('/',function(req,res) {
	//res.send("Home Page");
	res.render('index');
});

app.get('/contact',function(req,res) {
	//res.sendFile(__dirname+'/index.html');
	console.log(req.query);
	res.render('contact',{qs:req.query});
});


app.post('/contact',urlencodedParser, function(req,res) {
	console.log(req.body);
	res.render('contact-success',{data:req.body});
});


app.get('/profile/:name',function(req,res){
	//res.send("profile with name "+req.params.name+" is srequested");
	var data= {age:29, job: 'Software Engineer', hobbies: ['cooking','fighting','music']};
	res.render('profile',{person: req.params.name, data: data});
});

app.listen(3000);