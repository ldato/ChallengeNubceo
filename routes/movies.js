const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {createMovie, getAllMovies, getOneMovie, deleteOneMovie} = require('../controllers/moviesController');

router.post('/',verifyToken, createMovie);

router.get('/',verifyToken, getAllMovies);

router.get('/:name',verifyToken, getOneMovie);

router.delete('/:name',verifyToken, deleteOneMovie);



module.exports = router;
