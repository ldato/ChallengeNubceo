const {Schema, model} = require('mongoose');

const Director = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = model('Director', Director);