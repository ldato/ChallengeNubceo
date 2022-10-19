const {Schema, model} = require('mongoose');

const Actor = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = model('Actor', Actor);