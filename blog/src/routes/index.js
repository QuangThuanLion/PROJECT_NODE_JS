const newsRouter = require('./news');
const siteRouter = require('./site');
const courseController = require('./courses');
const meController = require('./me');

function route(app) {

    //định nghĩa route

    app.use('/me', meController);

    app.use('/courses', courseController);

    app.use('/news', newsRouter);

    app.use('/', siteRouter);

}
module.exports = route;