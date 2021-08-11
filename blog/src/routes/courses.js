const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.get('/edit/:id', courseController.edit);
router.put('/update/:id', courseController.update)
router.delete('/delete/:id', courseController.destroy);
router.delete('/force/:id', courseController.forceDestroy);
router.patch('/restore/:id', courseController.restore)
router.post('/store', courseController.store);
router.post('/handle-form-action', courseController.handleFormAction);
router.get('/:slug', courseController.show);

module.exports = router;