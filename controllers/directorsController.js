const {create, getAll, getOne, deleteOne} = require('../services/director');

const createDirector = async (req, res) => {
    console.log(req.body)
    const data = req.body;
    try {
        const newDirector = await create(data);
        return res.status(201).json({
            message: "Director created",
            cliente: newDirector
        });
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        })
    }
}

const getAllDirectors = async (req, res) => {
    try {
        const directors = await getAll();
        return res.status(200).json(directors);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const getOneDirector = async (req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const director = await getOne(name);
        return res.status(200).json(director);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const deleteOneDirector = async (req, res) => {
    const {name} = req.params;
    try {
        const director = await deleteOne(name);
        return res.status(200).json(director);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

module.exports = {createDirector, getAllDirectors, getOneDirector, deleteOneDirector}