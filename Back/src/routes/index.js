const {Router} = require('express');
const getChairByDetail = require('../controllers/getCharDetail');
const getChairById = require('../controllers/getCharById');
let Fav = require('../utils/fav');

const router = Router();

router.get('/onsearch/:id', getChairById);
router.get('/detail/:id', getChairByDetail);

router.post('/rickandmorty/fav', (req, res) => {
    Fav.push(req.body);
    res.status(200).json({status: 'ok'});
});

router.get('/rickandmorty/fav', (req,res) => {
    res.status(200).json(Fav)
});

router.delete('/rickandmorty/fav/:id', (req,res) => {
    const {id} = req.params;
    Fav = Fav.filter((char) => char.id != id)
    res.status(200).json({status: 'delete prefect'});
})



module.exports =  router;

