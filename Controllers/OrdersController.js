var OrdersModel = require('../models/OrdersModel.js');

/**
 * OrdersController.js
 *
 * @description :: Server-side logic for managing Orderss.
 */
module.exports = {

    /**
     * OrdersController.list()
     */
    list: function (req, res) {
        OrdersModel.find(function (err, Orderss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Orders.',
                    error: err
                });
            }

            return res.json(Orderss);
        });
    },

    /**
     * OrdersController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        OrdersModel.findOne({_id: id}, function (err, Orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Orders.',
                    error: err
                });
            }

            if (!Orders) {
                return res.status(404).json({
                    message: 'No such Orders'
                });
            }

            return res.json(Orders);
        });
    },

    /**
     * OrdersController.create()
     */
    create: function (req, res) {
        var Orders = new OrdersModel({
			OrderId : req.body.OrderId,
			OrderDate : req.body.OrderDate,
			OrderSum : req.body.OrderSum,
			UserId : req.body.UserId,
			User : req.body.User,
			OrderItem : req.body.OrderItem,
        });

        Orders.save(function (err, Orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Orders',
                    error: err
                });
            }

            return res.status(201).json(Orders);
        });
    },

    /**
     * OrdersController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        OrdersModel.findOne({_id: id}, function (err, Orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Orders',
                    error: err
                });
            }

            if (!Orders) {
                return res.status(404).json({
                    message: 'No such Orders'
                });
            }

            Orders.OrderId = req.body.OrderId ? req.body.OrderId : Orders.OrderId;
			Orders.OrderDate = req.body.OrderDate ? req.body.OrderDate : Orders.OrderDate;
			Orders.OrderSum = req.body.OrderSum ? req.body.OrderSum : Orders.OrderSum;
			Orders.UserId = req.body.UserId ? req.body.UserId : Orders.UserId;
			Orders.User = req.body.User ? req.body.User : Orders.User;
			Orders.OrderItem = req.body.OrderItem ? req.body.OrderItem : Orders.OrderItem;
			
            Orders.save(function (err, Orders) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Orders.',
                        error: err
                    });
                }

                return res.json(Orders);
            });
        });
    },

    /**
     * OrdersController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        OrdersModel.findByIdAndRemove(id, function (err, Orders) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Orders.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
