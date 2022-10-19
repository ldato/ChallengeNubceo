const {create, getAll, getOne, deleteOne, updateSeason} = require('../services/tvshow');

const createTvShow = async (req, res) => {
    const tvShow = req.body;
    try {
        const newTvShow = await create(tvShow);
        return res.status(201).json({
            message: "TvShow created",
            movie: newTvShow
        })
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        })
    }
}

const getAllTvShows = async (req, res) => {
    try {
        const tvShows = await getAll();
        return res.status(200).json(tvShows);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const getOneTvShow = async (req, res) => {
    const {name} = req.params;
    console.log(name)
    try {
        const tvShow = await getOne(name);
        return res.status(200).json(tvShow);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const deleteOneTvShow = async (req, res) => {
    const {name} = req.params;
    try {
        const tvShow = await deleteOne(name);
        return res.status(200).json(tvShow);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        });
    }
}

const updateOneSeason = async (req, res) => {
    const { name } = req.params;
    const data = req.body;
    try {
        const tvShow = await getOne(name);
        if (!tvShow) {
            return res.status(404).json({
                message: "TvShow not found"
            })
        }
        // const updateArticulo = {
        //     precioVenta: !data.precioVenta ? articulo.precioVenta : data.precioVenta,
        //     precioCosto: !data.precioCosto ? articulo.precioCosto : data.precioCosto
        // }
        const tvShowUpdate = await updateSeason(name, data);
        return res.status(200).json(tvShowUpdate);
    } catch (error) {
        return res.status(400).json({
            message: "An error has ocurred",
            error: error
        })
    }
}




module.exports = {createTvShow, getAllTvShows, getOneTvShow, deleteOneTvShow, updateOneSeason}