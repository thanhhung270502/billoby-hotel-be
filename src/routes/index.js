const newsRouter = require('./news');
const siteRouter = require('./site');
const roomRouter = require('./rooms');
// const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/rooms', roomRouter);
    // app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = route;
