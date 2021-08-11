const Courses = require('../models/Courses')
const { multipleMongooseToObject } = require('../../utils/mongoose');
class SiteController {

    // [GET] /home
    index(req, res, next) {
        Courses.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(error => next(error));

    }

    // [GET] search
    search(req, res) {
        return res.render('search');
    }

}

module.exports = new SiteController;