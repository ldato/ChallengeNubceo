require('../connection');
const Genre = require('../models/Genre');

const create = async (data) => {
    const {name} = data;
    const newGenre = new Genre ({
        name: name
    })
    const genreCreated = await newGenre.save();
    return genreCreated;
}

const getAll = async () => {
    const genres = await Genre.find();
    return genres;
}

const getOne = async (name) => {
    const genre = await Genre.findOne({name: name})
    return genre;
}

const deleteOne = async (name) => {
    const genreDeleted = await Genre.deleteOne({name: name});
    return genreDeleted;
}


module.exports = {create, getAll, getOne, deleteOne}