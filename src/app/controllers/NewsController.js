class NewsController {
    // [GET] /news
    index(req, res) {
        res.send(`<h1>News Page</h1>`);
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send(`<h1>News Detail</h1>`);
    }
}

module.exports = new NewsController();
