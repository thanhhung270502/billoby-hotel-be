const Course = require('../models/Course');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // res.send(`<h1>Home Page</h1>`);
        Course.find({})
            .then((courses) => res.json(courses))
            .catch(next);
    }
}

module.exports = new SiteController();
