var express = require('express');
var router = express.Router();
var CatagoryController = require('../controllers/CatagoryController.js');

/*
 * GET
 */
router.get('/', CatagoryController.list);

/*
 * GET
 */
router.get('/:id', CatagoryController.show);

/*
 * POST
 */
router.post('/', CatagoryController.create);

/*
 * PUT
 */
router.put('/:id', CatagoryController.update);

/*
 * DELETE
 */
router.delete('/:id', CatagoryController.remove);

module.exports = router;
