const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    console.log('GET /');
    res.render('students');
});

app.listen(3001);
