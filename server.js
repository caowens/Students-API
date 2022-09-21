const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log('GET /');
    res.send('Hi');
});

app.get('/students', (req, res) => {
    console.log('GET /');
    res.render('students');
});

app.get('/students/1', (req, res) => {
    console.log('GET /');
    res.render('student1');
});

app.listen(3001);
