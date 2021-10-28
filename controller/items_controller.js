import db from "../models/index.js";

class Item {

    // add items
    addItems(req, res) {
        db.items.create(req.body).then(itemsData => {
            res.status(201).json({
                message: "post fetch successfully",
                data: itemsData, 
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
    getItems(req, res) {
        db.items.findAll().then(itemsData => {
            res.status(200).json({
                message: "item data fetch successfully",
                data: itemsData,
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
    getSingleItems(req, res) {
        const id = req.params.id;
        db.items.findByPk(id).then(itemsData => {
            if (itemsData) {
                res.status(200).json({
                    message: " item data fetch successfully",
                    data: itemsData,
                    error: null
                });
            } else {
                res.status(404).json({
                    message: "item not found",
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
    updateItem(req, res) {
        const id = req.params.id;
        const updateItemsDetails = {
            item_name : req.body.item_name,
            category : req.body.category,
            item_description : req.body.item_description,
            unit : req.body.unit,
            sales_price : req.body.sales_price,
            quantity : req.body.quantity
        }
        db.items.findByPk(id).then(itemsdata => {
            if(itemsdata){
                db.items.update(updateItemsDetails , { where : { item_id : id } }).then(itemsData => {
                    res.status(200).json({
                        message: "item details is updated successfully",
                        data: itemsdata,
                        error: null
                    });
                }).catch(error => {
                    res.status(500).json({
                        message: "something went wrong",
                        data: null,
                        error: error
                    });
                });
            }else{
                res.status(404).json({
                    message: "item not found",
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
    deleteItem(req, res) {
        const id = req.params.id;
        db.items.findByPk(id).then(itemsdata => {
            if(itemsdata){
                db.items.destroy({ where : { item_id : id } }).then(itemsData => {
                    res.status(200).json({
                        message: "item details is deleted successfully",
                        data: itemsData,
                        error: null
                    });
                }).catch(error => {
                    res.status(500).json({
                        message: "something went wrong",
                        data: null,
                        error: error
                    });
                })
            }else{
                res.status(404).json({
                    message: "item not found",
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
}

export default new Item();