require('../connection');
const Director = require('../models/Director');

const create = async (data) => {
    const {name} = data;
    const newDirector = new Director ({
        name: name
    })
    const directorCreated = await newDirector.save();
    return directorCreated;
}

const getAll = async () => {
    const directors = await Director.find();
    return directors;
}

const getOne = async (name) => {
    const director = await Director.findOne({name: name})
    return director;
}

const deleteOne = async (name) => {
    const directorDeleted = await Director.deleteOne({name: name});
    return directorDeleted;
}


module.exports = {create, getAll, getOne, deleteOne}