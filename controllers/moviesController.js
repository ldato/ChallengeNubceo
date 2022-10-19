const Movie = require('../models/Movie');
const {create, getAll, getOne, deleteOne} = require('../services/movie');

const createMovie = async (req, res) => {
    const movie = req.body;
    try {
        const newMovie = await create(movie);
        return res.status(201).json({
            message: "Movie created",
            movie: newMovie
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        })
    }
}

const getAllMovies = async (req, res) => {
    try {
        const movies = await getAll();
        return res.status(200).json(movies);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const getOneMovie = async (req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const movie = await getOne(name);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const deleteOneMovie = async (req, res) => {
    const {name} = req.params;
    try {
        const movie = await deleteOne(name);
        return res.status(200).json(movie);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

module.exports = {createMovie, getAllMovies, getOneMovie, deleteOneMovie}