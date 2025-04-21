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
app.set('layout', 'layouts/main');


const routes = [
    { name: 'Home', path: '' },
    { name: 'Profile', path: 'profile' },
    { name: 'Body Battery', path: 'body_battery' },
    { name: 'Calories', path: 'calories' },
    { name: 'Sleep', path: 'sleep' },
    { name: 'Steps', path: 'steps' },
    { name: 'Heart Rate', path: 'heart_rate' },
];

routes.forEach(route => {
    const url = route.path === '' ? '/' : `/${route.path}`;
    const view = route.path === '' ? 'index' : route.path;

    app.get(url, (req, res) => {
        res.render(view, { pageTitle: route.name });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

