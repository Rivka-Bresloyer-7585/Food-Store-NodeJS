var ProductModel = require('../models/ProductModel.js');

/**
 * ProductController.js
 *
 * @description :: Server-side logic for managing Products.
 */
module.exports = {


    getProductsThatBiggerFromFiveWord: async function (req, res) {
        
        let result=await ProductModel.find({$where: "(this.Description.length > 40)"});
        res.send(result);
    },


    /**
     * ProductController.list()
     */
    list: function (req, res) {
        ProductModel.find(function (err, Products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }

            return res.json(Products);
        });
    },

    /**
     * ProductController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ProductModel.find({ CategoryId: id }, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }

            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }

            return res.json(Product);
        });
    },

    /**
     * ProductController.create()
     */
    create: function (req, res) {
        var Product = new ProductModel({
            ProductId: req.body.ProductId,
            ProductName: req.body.ProductName,
            CategoryId: req.body.CategoryId,
            Price: req.body.Price,
            Description: req.body.Description,
            ImageName: req.body.ImageName
        });

        Product.save(function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Product',
                    error: err
                });
            }

            return res.status(201).json(Product);
        });
    },

    /**
     * ProductController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        ProductModel.findOne({ _id: id }, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product',
                    error: err
                });
            }

            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }

            Product.ProductId = req.body.ProductId ? req.body.ProductId : Product.ProductId;
            Product.ProductName = req.body.ProductName ? req.body.ProductName : Product.ProductName;
            Product.CategoryId = req.body.CategoryId ? req.body.CategoryId : Product.CategoryId;
            Product.Price = req.body.Price ? req.body.Price : Product.Price;
            Product.Description = req.body.Description ? req.body.Description : Product.Description;
            Product.ImageName = req.body.ImageName ? req.body.ImageName : Product.ImageName;

            Product.save(function (err, Product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Product.',
                        error: err
                    });
                }

                return res.json(Product);
            });
        });
    },

    /**
     * ProductController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        ProductModel.findByIdAndRemove(id, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Product.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
