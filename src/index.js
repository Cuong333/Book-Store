const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require('express-handlebars'); // Destructure the engine method

const route = require('./routes');
const db = require('./config/index');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine setup
app.engine(
    'hbs', 
    engine({ // Use engine method instead of direct exphbs call
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`),
);