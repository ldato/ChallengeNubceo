require('../connection');
const TvShow = require('../models/TvShow');

const create = async (data) => {
    const newTvShow = new TvShow({
        title: data.title,
        genre: data.genre,
        synopsis: data.synopsis,
        director: data.director,
        actors: data.actors,
        season: data.season,
        episode: data.episode
    });
    const tvShowCreated = await newTvShow.save();
    return tvShowCreated;
}

const getAll = async () => {
    const tvShows = await TvShow.find();
    return tvShows;
}

const getOne = async (name) => {
    const tvShow = await TvShow.findOne({title: name})
    return tvShow;
}

const deleteOne = async (name) => {
    const tvShowDeleted = await TvShow.deleteOne({title: name});
    return tvShowDeleted;
}

const updateSeason = async (name, data) => {
    const tvShow = await TvShow.updateOne(
        {title: name}, {$set: {
            "season": data.season           
        }}
    )
    return tvShow;
}


module. exports = {create, getAll, getOne, deleteOne, updateSeason}