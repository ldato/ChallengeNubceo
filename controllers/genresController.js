const {create, getAll, getOne, deleteOne} = require('../services/genre');

const createGenre = async (req, res) => {
    console.log(req.body)
    const data = req.body;
    try {
        const newGenre = await create(data);
        return res.status(201).json({
            message: "Genre created",
            cliente: newGenre
        });
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        })
    }
}

const getAllGenres = async (req, res) => {
    try {
        const genres = await getAll();
        return res.status(200).json(genres);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const getOneGenre = async (req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const genre = await getOne(name);
        return res.status(200).json(genre);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const deleteOneGenre = async (req, res) => {
    const {name} = req.params;
    try {
        const genre = await deleteOne(name);
        return res.status(200).json(genre);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

module.exports = {createGenre, getAllGenres, getOneGenre, deleteOneGenre}