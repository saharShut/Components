let express = require('express');
let router = express.Router();
let ctrlContainer = require('../controllers/container');
let ctrlElement = require('../controllers/elements');
require('sequelize');

// containers
router.get('/containers', ctrlContainer.containerList);
router.post('/containers', ctrlContainer.containerCreate);
router.get('/containers/:containerid', ctrlContainer.containerGet);
router.delete('/containers/:containerid', ctrlContainer.containerDelete);

// elements
router.get('/containers/:containerid/elements', ctrlElement.elementListById);
router.post('/containers/:containerid/elements', ctrlElement.createElement);
router.get('/containers/:containerid/elements/:elementid', ctrlElement.getElement);
router.post('/containers/:containerid/elements/:elementid', ctrlElement.updateElement);
router.delete('/elements/:elementid', ctrlElement.deleteElement);

module.exports = router;

