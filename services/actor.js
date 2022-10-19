require('../connection');
const Actor = require('../models/Actor');

const create = async (data) => {
    const {name} = data;
    const newActor = new Actor ({
        name: name
    })
    const actorCreated = await newActor.save();
    return actorCreated;
}

const getAll = async () => {
    const actors = await Actor.find();
    return actors;
}

const getOne = async (name) => {
    const actor = await Actor.findOne({name: name})
    return actor;
}

const deleteOne = async (name) => {
    const actorDeleted = await Actor.deleteOne({name: name});
    return actorDeleted;
}


module.exports = {create, getAll, getOne, deleteOne}