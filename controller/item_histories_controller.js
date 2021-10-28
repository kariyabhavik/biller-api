import db from "../models/index.js";

class Itemhistories {
 
    // add items
    addItemHistories(req, res) {
        db.item_histories.create(req.body).then(result => {
            res.status(201).json({
                message: "post fetch successfully",
                data: result,
                error: null
            });
        }).catch((error) => {
            res.status(500).json({
                message: "something went wrong",
                data: null,
                error: error
            });
        });
    }


    // get all items
    getItemHistories(req, res) {
        db.item_histories.findAll().then(result => {
            res.status(200).json({
                message: "item history data fetch successfully",
                data: result,
                error: null
            });
        }).catch(error => { 
            res.status(500).json({
                message: "something went wrong",
                data: null,
                error: error
            });
        });
    }

    // get single items
    getSingleItemHistories(req, res) {
        const id = req.params.id;
        db.item_histories.findByPk(id).then(ItemHistoriesData => {
            if (ItemHistoriesData) {
                res.status(200).json({
                    message: "item history data fetch successfully",
                    data: ItemHistoriesData,
                    error: null
                });
            } else {
                res.status(404).json({
                    message: "item history not found",
                });
            }
        }).catch(error => {
            res.status(500).json({
                message: "something went wrong",
                data: null,
                error: error
            });
        });
    }


    // update the items
    updateItemHistories(req, res) {
        const id = req.params.id;
        const updateItemHistoriesDetails = {
            rate: req.body.rate,
            quantity: req.body.quantity,
            amount: req.body.amount,
            updated_by: req.body.updated_by
        }
        db.item_histories.findByPk(id).then(Itemhistoriesdata => {
            if (Itemhistoriesdata) {
                db.item_histories.update(updateItemHistoriesDetails, { where: { item_history_id: id } }).then(ItemHistoriesData => {
                    res.status(200).json({
                        message: "item history details is updated successfully",
                        data: Itemhistoriesdata,
                        error: null
                    });
                }).catch(error => {
                    res.status(500).json({
                        message: "something went wrong",
                        data: null,
                        error: error
                    });
                })
            } else {
                res.status(404).json({
                    message: "item history not found",
                });
            }
        }).catch(error => {
            res.status(500).json({
                message: "something went wrong",
                data: null,
                error: error
            });
        });
    }


    // delete the items
    deleteItemHistories(req, res) {
        const id = req.params.id;
        db.item_histories.findByPk(id).then(Itemhistoriesdata => {
            if (Itemhistoriesdata) {
                db.item_histories.destroy({ where: { item_history_id: id } }).then(ItemHistoriesHata => {
                    res.status(200).json({
                        message: "this item history is deleted",
                        data: Itemhistoriesdata,
                        error: null
                    });
                }).catch(error => {
                    res.status(500).json({
                        message: "something went wrong",
                        data: null,
                        error: error
                    });
                });
            } else {
                res.status(404).json({
                    message: "item history not found",
                });
            }
        }).catch(error => {
            res.status(500).json({
                message: "something went wrong",
                data: null,
                error: error
            });
        })
    }
}

export default new Itemhistories();