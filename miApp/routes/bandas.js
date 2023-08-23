var express = require('express');
const bandasController = require('../controllers/bandasController');
var router = express.Router();

/* GET home page. */
router.get('/', bandasController.listadoBandas);

router.get('/id/:id', bandasController.encuentraId);

router.get('/genero/:genero', bandasController.encuentraGenero);


module.exports = router;
