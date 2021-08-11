const mongoose = require('mongoose');

async function connect() {

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/node_js_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('Connect database successfully !');
    } catch (error) {
        console.log('Connect database falied !');
    }
}

module.exports = { connect };