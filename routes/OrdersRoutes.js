var express = require('express');
var router = express.Router();
var OrdersController = require('../controllers/OrdersController.js');

/*
 * GET
 */
router.get('/', OrdersController.list);

/*
 * GET
 */
router.get('/:id', OrdersController.show);

/*
 * POST
 */
router.post('/', OrdersController.create);

/*
 * PUT
 */
router.put('/:id', OrdersController.update);

/*
 * DELETE
 */
router.delete('/:id', OrdersController.remove);

module.exports = router;
