const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const {createActor, getAllActors, getOneActor, deleteOneActor} = require('../controllers/actorsController');

router.post('/',verifyToken, createActor);

router.get('/',verifyToken, getAllActors);

router.get('/:name',verifyToken, getOneActor);

router.delete('/:name',verifyToken, deleteOneActor);



module.exports = router;