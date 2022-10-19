const {Schema, model} = require('mongoose');

const Movie = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: "Genre",
        required: true
    },
    synopsis: {
        type: String,
        required: false,
    },
    director: {
        type: Schema.Types.ObjectId,
        ref: "Director",
        required: true
    },
    actors: [{
        actor: {
            type: Schema.Types.ObjectId,
            ref: "Actor",
            required: true
        }        
    }],
})

module.exports = model('Movie', Movie);