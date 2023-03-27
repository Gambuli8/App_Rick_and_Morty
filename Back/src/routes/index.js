const {Router} = require('express');
const getChairByDetail = require('../controllers/getCharDetail');
const getChairById = require('../controllers/getCharById');

const router = Router();

router.get('/onsearch/:id', getChairById);
router.get('/detail/:id', getChairByDetail);



module.exports =  router;

