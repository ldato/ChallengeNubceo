require('../connection');
const Movie = require('../models/Movie');

const create = async (data) => {
    const newMovie = new Movie({
        title: data.title,
        genre: data.genre,
        synopsis: data.synopsis,
        director: data.director,
        actors: data.actors
    });
    const movieCreated = await newMovie.save();
    return movieCreated;
}

const getAll = async () => {
    const movies = await Movie.find();
    return movies;
}

const getOne = async (name) => {
    const movie = await Movie.findOne({title: name})
    return movie;
}

const deleteOne = async (name) => {
    const movieDeleted = await Movie.deleteOne({title: name});
    return movieDeleted;
}

const updateSeason = async (name, data) => {
    const articulo = await Articulo.updateOne(
        {title: name}, {$set: {
            "season": data.season           
        }}
    )
    return articulo;
}

module. exports = {create, getAll, getOne, deleteOne, updateSeason}
  