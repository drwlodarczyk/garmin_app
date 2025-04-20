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

const expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // gdzie main.ejs to główny szablon


const routes = [
    '',
    'profile',
    'body_battery',
    'calories',
    'sleep',
    'steps',
    'heart_rate',
];

routes.forEach(route => {
    const path = route === 'index' ? '/' : `/${route}`;
    app.get(path, (req, res) => {
        res.render(route);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

