const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {createTvShow, getAllTvShows, getOneTvShow, deleteOneTvShow, updateOneSeason} = require('../controllers/tvShowsController');

router.post('/',verifyToken, createTvShow);

router.get('/',verifyToken, getAllTvShows);

router.get('/:name',verifyToken, getOneTvShow);

router.delete('/:name',verifyToken, deleteOneTvShow);

router.patch('/:name',verifyToken, updateOneSeason);



module.exports = router;