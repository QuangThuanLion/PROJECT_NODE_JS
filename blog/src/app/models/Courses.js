const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Courses = new Schema({
    name: { type: String, maxLength: 255, require: true },
    description: { type: String, maxLength: 600 },
    image: { type: String, maxLength: 255 },
    slug: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255, require: true },
    slug: { type: String, slug: "name", unique: true }
}, {
    timestamps: true,
});

// Custom query helpers

// At plug in for delete soft
var mongooseDelete = require('mongoose-delete');
Courses.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Courses', Courses);