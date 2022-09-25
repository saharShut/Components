var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/containers/:containerid/elements', ctrlMain.elementForm);
router.get('/containers/:containerid/elements/:elementid', ctrlMain.elementForm);
router.get('/containers', ctrlMain.containerForm);
router.get('/elements/deleteElement/:elementid', ctrlMain.deleteElement);

module.exports = router;
