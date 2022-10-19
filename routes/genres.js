const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {createGenre, getAllGenres, getOneGenre, deleteOneGenre} = require('../controllers/genresController');

router.post('/',verifyToken, createGenre);

router.get('/',verifyToken, getAllGenres);

router.get('/:name',verifyToken, getOneGenre);

router.delete('/:name',verifyToken, deleteOneGenre);



module.exports = router;

