const Courses = require('../models/Courses')
const { mongooseToObject } = require('../../utils/mongoose');

class CourseController {

    // [GET] /courses/:slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then(course => {
                return res.render('courses/show', {
                    course: mongooseToObject(course)
                });
            })
            .catch(error => next(error));

    }

    // [GET] /courses/create
    create(req, res, next) {
        return res.render('courses/create');
    }

    // [GET] /courses/edit/:id
    edit(req, res, next) {
        const id = req.params.id;
        if (id !== null) {
            Courses.findById(id)
                .then(courses => {
                    return res.render('courses/update', {
                        courses: mongooseToObject(courses)
                    })
                })
                .catch(error => next(error))
        };
    }

    // [PUT] /courses/update/:id
    update(req, res, next) {
        const formData = {...req.body };
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Courses.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => next(error))
    }

    // [DELETE] /courses/delete/:id
    destroy(req, res, next) {
        Courses.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(error => next(error))
    }

    // [POST] /courses/store
    store(req, res, next) {
        const formData = {...req.body };
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Courses(formData);
        const newCourses = course.save();

        newCourses.then((result) => res.redirect(`/courses/${result.slug}`))

        .catch(() => res.redirect('/'));
    }

    // [PATCH] /restore/:id
    restore(req, res, next) {
        Courses.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(error => next(error));
    }

    // [DELETE] /force/:id
    forceDestroy(req, res, next) {
        Courses.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(error => next(error));
    }

    // [POST] /courses/handleFormAction
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                {
                    Courses.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(error => next(error))
                    break;
                }
            default:
                res.json({ message: 'Action is invalid' });
        }
    }

}

module.exports = new CourseController;