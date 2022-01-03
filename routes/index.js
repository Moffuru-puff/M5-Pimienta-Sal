var express = require('express');
var router = express.Router();
let controller = require('../controllers/indexController');

/* GET home page. */
router.get('/', controller.index);
router.get("/menu", controller.menu)
router.get("/menu/:id", controller.detallePlato)


module.exports = router;
