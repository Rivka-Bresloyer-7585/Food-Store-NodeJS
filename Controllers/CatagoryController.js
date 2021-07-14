var CatagoryModel = require('../models/CatagoryModel.js');

/**
 * CatagoryController.js
 *
 * @description :: Server-side logic for managing Catagorys.
 */
module.exports = {

    /**
     * CatagoryController.list()
     */
    list: function (req, res) {
        CatagoryModel.find(function (err, Catagorys) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Catagory.',
                    error: err
                });
            }

            return res.json(Catagorys);
        });
    },

    /**
     * CatagoryController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        CatagoryModel.findOne({_id: id}, function (err, Catagory) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Catagory.',
                    error: err
                });
            }

            if (!Catagory) {
                return res.status(404).json({
                    message: 'No such Catagory'
                });
            }

            return res.json(Catagory);
        });
    },

    /**
     * CatagoryController.create()
     */
    create: function (req, res) {
        var Catagory = new CatagoryModel({
			CatagoryName : req.body.CatagoryName
        });

        Catagory.save(function (err, Catagory) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Catagory',
                    error: err
                });
            }

            return res.status(201).json(Catagory);
        });
    },

    /**
     * CatagoryController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        CatagoryModel.findOne({_id: id}, function (err, Catagory) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Catagory',
                    error: err
                });
            }

            if (!Catagory) {
                return res.status(404).json({
                    message: 'No such Catagory'
                });
            }

            Catagory.CatagoryName = req.body.CatagoryName ? req.body.CatagoryName : Catagory.CatagoryName;
			
            Catagory.save(function (err, Catagory) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Catagory.',
                        error: err
                    });
                }

                return res.json(Catagory);
            });
        });
    },

    /**
     * CatagoryController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        CatagoryModel.findByIdAndRemove(id, function (err, Catagory) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Catagory.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
