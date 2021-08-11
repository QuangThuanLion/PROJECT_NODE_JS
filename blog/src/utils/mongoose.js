module.exports = {
    multipleMongooseToObject: function(mongooses) {
        return mongooses.map(mongoose => mongoose.toObject());
    },
    mongooseToObject: function(mogooses) {
        return mogooses ? mogooses.toObject() : mogooses;
    }
};