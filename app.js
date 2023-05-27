const path = require('path');
const fs = require('fs');

const express = require('express');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
//for adding the style and javascript files


app.get('/', function(req, res) {	
	// const pathFile = path.join(__dirname, 'views', 'index.html');
	// res.sendFile(pathFile);
	res.render('index');
});

app.get('/restaurants', function(req, res) {
	// const pathFile = path.join(__dirname, 'views', 'resturant.html');
	// res.sendFile(pathFile);
	const filePath = path.join(__dirname, 'data', 'user.json');
	const fileData = fs.readFileSync(filePath);
	const storedData = JSON.parse(fileData);

	res.render('resturant', {numberOfResturant: storedData.length,  resturants: storedData });
});

app.get('/recommend', function(req, res) {
	// const pathFile = path.join(__dirname, 'views', 'recommend.html');
	// res.sendFile(pathFile);
	res.render('recommend');
});

app.post('/recommend', function(req, res) {
 const resturant = req.body;
 const filePath = path.join(__dirname, 'data', 'user.json');
 const fileData = fs.readFileSync(filePath);
 const storedData = JSON.parse(fileData);
 storedData.push(resturant);

 fs.writeFileSync(filePath, JSON.stringify(storedData));
 res.redirect('/confirm');
});

app.get('/confirm', function(req, res) {
	// const pathFile = path.join(__dirname, 'views', 'confirm.html');
	// res.sendFile(pathFile);
	res.render('confirm');
});
app.get('/about', function(req, res) {
	// const pathFile = path.join(__dirname, 'views', 'about.html');
	// res.sendFile(pathFile);
	res.render('about');
});



app.listen(3000);