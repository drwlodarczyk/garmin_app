const express = require('express');
const path = require('path');
// const fs = require('fs');
const bodyParser = require('body-parser')

const app = express();
const PORT = process.env.PORT || 3000;

// Ustawienie EJS i ścieżek
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

