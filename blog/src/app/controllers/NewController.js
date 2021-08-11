class NewControllers {

    // [GET] /news
    index(req, res) {
        return res.render('new');
    }

    // [GET] detail-new
    detailNew(req, res) {
        return res.render('detail-new');
    }

    // [GET] accountNew
    accountNew(req, res) {
        return res.send('ACCOUNT NEW');
    }

}

module.exports = new NewControllers;