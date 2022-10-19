const {create, getAll, getOne, deleteOne} = require('../services/actor');

const createActor = async (req, res) => {
    console.log(req.body)
    const data = req.body;
    try {
        const newActor = await create(data);
        return res.status(201).json({
            message: "Actor created",
            cliente: newActor
        });
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        })
    }
}

const getAllActors = async (req, res) => {
    try {
        const actors = await getAll();
        return res.status(200).json(actors);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const getOneActor = async (req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const actor = await getOne(name);
        return res.status(200).json(actor);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const deleteOneActor = async (req, res) => {
    const {name} = req.params;
    try {
        const actor = await deleteOne(name);
        return res.status(200).json(actor);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

module.exports = {createActor, getAllActors, getOneActor, deleteOneActor}