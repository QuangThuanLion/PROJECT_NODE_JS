const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

//import middleware
const SortMiddleware = require('./app/middlewares/SortMiddlewares');

//import index tu router
const route = require('./routes/index');

//import database
const database = require('./config/db/index');
database.connect();

app.use(express.static(path.join(__dirname, 'public')));

// middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//apply custom middeware
app.use(SortMiddleware);

// OVERRIDE METHOD
app.use(methodOverride('_method'));

//HTTP logger
// app.use(morgan('combined'));

//set resourecs cua view handlebars
app.set('views', path.join(__dirname, 'resources', 'views'));

//cấu trúc config đuôi của handlerBars
app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: require('./helpers/handlebars'),
}));
app.set('view engine', 'hbs');

//khoi tao route truyen instance cua express vao
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});