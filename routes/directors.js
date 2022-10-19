const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {createDirector, getAllDirectors, getOneDirector, deleteOneDirector} = require('../controllers/directorsController');

router.post('/',verifyToken, createDirector);

router.get('/',verifyToken, getAllDirectors);

router.get('/:name',verifyToken, getOneDirector);

router.delete('/:name',verifyToken, deleteOneDirector);



module.exports = router;