const Room = require("../models/Room");


class RoomsController {
    // [GET] /
    index(req, res, next) {
        // res.send(`<h1>Home Page</h1>`);
        Room.find({})
            .then((rooms) => res.json(rooms))
            .catch(next);
    }

    // [GET] /rooms/:slug
    show(req, res, next) {
        Room.findOne({ slug: req.params.slug })
            .then((room) => res.json(room))
            .catch(next);
    }
}

module.exports = new RoomsController();
