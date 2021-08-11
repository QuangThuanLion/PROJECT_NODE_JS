const Courses = require('../models/Courses')
const { multipleMongooseToObject } = require('../../utils/mongoose');

class MeController {

    // [GET] /me/stored/courses

    storedCourses(req, res, next) {

        let courseQuery = Courses.find({});

        if (req.query.hasOwnProperty('_sort')) {
            const isValidType = ['asc', 'desc'].includes(req.query.type);
            courseQuery = courseQuery.sort({
                [req.query.column]: isValidType ? req.query.type : 'desc',
            });
        };

        Promise.all([courseQuery, Courses.countDocumentsDeleted()])
            .then(([courses, countDocumentsDeleted]) => {
                return res.render('me/stored-courses', {
                    countDocumentsDeleted,
                    courses: multipleMongooseToObject(courses)
                });
            })
            .catch(() => res.redirect('/'));
    };

    // [GET] /me/trash/courses
    trash(req, res, next) {
        Courses.findDeleted({})
            .then(courses => {
                return res.render('me/trash-course', {
                    courses: multipleMongooseToObject(courses)
                });
            })
    }

}

module.exports = new MeController;