const OrdersModel = require('../models/OrdersModel.js');
const ProductModel = require('../models/ProductModel.js');
var UserModel = require('../models/UserModel.js');

/**
 * UserController.js
 *
 * @description :: Server-side logic for managing Users.
 */
module.exports = {


    getOrdersByUserId:function (req, res) {
        var id = req.params.id;
  
        UserModel.find({_id: id}).populate('orders').exec( function (err, order) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting order.',
                    error: err
                });
            }
  
            if (!order) {
                return res.status(404).json({
                    message: 'No such order'
                });
            }
  
            return res.json(order);
        });
     },


    /**
     * UserController.list()
     */
    list: function (req, res) {
        UserModel.find(function (err, Users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            return res.json(Users);
        });
    },

    /**
     * UserController.show()
     */
     show: function (req, res) {
        var name = req.params.Email;
        var password = req.params.Password;

        UserModel.find({ name: name, password: password }, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User.',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            return res.json(User);
        });
    },
    /**
     * UserController.create()
     */
    create: function (req, res) {
        var User = new UserModel({
			Email : req.body.Email,
			FirstName : req.body.FirstName,
			LastName : req.body.LastName,
			Password : req.body.Password
        });

        User.save(function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating User',
                    error: err
                });
            }

            return res.status(201).json(User);
        });
    },

    /**
     * UserController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        UserModel.findOne({_id: id}, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting User',
                    error: err
                });
            }

            if (!User) {
                return res.status(404).json({
                    message: 'No such User'
                });
            }

            User.Email = req.body.Email ? req.body.Email : User.Email;
			User.FirstName = req.body.FirstName ? req.body.FirstName : User.FirstName;
			User.LastName = req.body.LastName ? req.body.LastName : User.LastName;
			User.Password = req.body.Password ? req.body.Password : User.Password;
			
            User.save(function (err, User) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating User.',
                        error: err
                    });
                }

                return res.json(User);
            });
        });
    },

    /**
     * UserController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        UserModel.findByIdAndRemove(id, function (err, User) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the User.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
