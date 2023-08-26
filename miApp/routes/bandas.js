var express = require('express');
const bandasController = require('../controllers/bandasController');
var router = express.Router();

/* GET home page. */
//Cuando se hace bandas/ nos muestra la lista de bandas con su nombre y su img. FALTA HACER CUANDO SE HAGA CLICK SE REDIRIJA A DETALLES
router.get('/', bandasController.index);


router.get('/id/:id', bandasController.encuentraId);

router.get('/genero/:genero', bandasController.encuentraGenero);


module.exports = router;
