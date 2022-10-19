const router = require('express').Router();
const authRouter = require('./auth');
const genresRoutes = require('./genres');
const actorsRoutes = require('./actors');
const directorsRoutes = require('./directors')
const moviesRoutes = require('./movies');
const tvShowsRoutes = require('./tvShows');
const verifyToken = require('../middleware/verifyToken')


router.get('/', verifyToken);

router.use('/auth', authRouter);
router.use('/genres', genresRoutes);
router.use('/actors', actorsRoutes);
router.use('/directors', directorsRoutes);
router.use('/movies', moviesRoutes);
router.use('/tvshows', tvShowsRoutes);

module.exports = router;