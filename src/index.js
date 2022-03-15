const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const db = require('./config/db')

//Connect to DB
db.connect();
const app = express();

const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// Route init
route(app);

app.listen(port, () =>
    console.log(`App is listening on http://localhost:${port}`),
);
