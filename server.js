var express = require('express');

var app = express();

var bodyParser = require('body-parser'); 

var fs =require('fs');

//встановлення каталогу для статистичного контекту css
app.use(express.static(__dirname)); 

//встановлення каталогу для parse application 
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json 
app.use(bodyParser.json())


// app.get('/', function(req,res)
// {
// 	res.send('test!');
// });

app.get('/', function(req,res)
{
	res.sendFile(__dirname + '/index.html');
});

app.get('/list', function(req,res)
{
	res.sendFile(__dirname + '/data.json');
});


app.get('/form', function(req,res)
{
	res.sendFile(__dirname + '/form.html');
});

// app.get('/formget', function(req,res)
// {
// 	console.log(req.query);
// 	var file = require('./data.json');
// 	console.log(file);
// 	file.push(req.query);
// 	var str = JSON.stringify(file);
// 	fs.writeFileSync('data.json', str);   // зачитуємо дані на сеовер
// 	res.send("Дані збережені на сервері!");
// });


app.post('/formsend',function(req,res)
{
 var id = req.body.id;
 var file = require('./data.json');
 console.log(req.body);
 file.splice(id,1);
 var str = JSON.stringify(file);
 fs.writeFileSync('data.json', str);
 res.send(str);
});


// мій код заблокований. Треба перевірити із кодом вище, де помилка
// app.post('/formsendpost', function(req,res)
// {
// 	var id=req.body.id;
// 	var file = require('./data.json');
// 	// console.log(id);
// 	console.log(req.body);
// 	file.splice(idquery);
// 	res.send("Дані збережені на сервері!");
// });

app.post('/postsend', function(req,res)
{
	console.log(req.body);
	res.send(req.body.myinput);
});

// app.get('/myget', function(req,res)
// {
// 	console.log(req.query);
// 	res.send('success!');
// });

// app.get('/mypost', function(req,res)
// {
// 	console.log(req.post);
// 	res.send('success!');
// });


app.listen(8080);
console.log('Server is running!');