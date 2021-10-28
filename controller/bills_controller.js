import db from "../models/index.js";

class Bills {

    // add bills
    async addbills(req, res) {
        try {
            const transaction = await db.sequelize.transaction();

            const advance_amt = req.body.billdata.advance;
            const totalAmount = req.body.billdata.totam_amount;
            const balanceAmount = totalAmount - advance_amt;
            req.body.billdata.balance_amount = balanceAmount;
            req.body.billdata.ipAddress = req.ip;

            db.bills.create(req.body.billdata, {
                transaction: transaction
            }).then(billdata => {
                let bill_id = billdata.bill_id;
                console.log(bill_id);
                req.body.itemhistory.bill_id = bill_id;
                req.body.itemhistory.ipAddress = req.ip;

                const itemRate = req.body.itemhistory.rate;
                const itemQty = req.body.itemhistory.quantity;
                const amount = itemRate * itemQty;
                req.body.itemhistory.amount = amount;
                db.item_histories.create(req.body.itemhistory, {
                    transaction: transaction
                }).then(itemhistory => {
                    transaction.commit();
                    res.status(201).json({
                        message: "bill created successfully",
                        billdata: billdata,
                        itemhistory: itemhistory,
                        error: null
                    })
                }).catch((error) => {
                    transaction.rollback();
                    console.log(error);
                    res.status(500).json({
                        message: ".......something went wrong",
                        data: null,
                        error: error
                    });
                });

            }).catch((error) => {
                transaction.rollback();
                console.log(error);
                res.status(500).json({
                    message: "something went wrong",
                    data: null,
                    error: error
                });
            });

        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "something went...wrong",
                error: error
            });
        }
    }


    // get all bills
    getbillsList(req, res) {
        db.bills.findAll().then(billData => {
            res.status(200).json({
                message: "bills data is featch successfully",
                data: billData,
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
    

    // get single bills
    getSinglebills(req, res) {
        const id = req.params.id;
        db.bills.findByPk(id).then(billData => {
            if (billData) {
                res.status(200).json({
                    message: "bill data featch successfully",
                    data: billData,
                    error: null
                }).catch(error => {
                    res.status(500).json({
                        message: "something went wrong",
                        data: null,
                        error: error
                    });
                });
            } else {
                res.status(404).json({
                    message: "bill not found",
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


    // update the bills
    updatebills(req, res) {
        const id = req.params.id;
        const updatebillsDetails = {
            bill_date_time: req.body.bill_date_time,
            advance: req.body.advance,
            balance_amount: req.body.balance_amount,
            totam_amount: req.body.totam_amount,
            remark: req.body.remark,
            company_id: req.body.company_id,
            updated_by: req.body.updated_by,
            party_id: req.body.party_id
        }

        db.bills.findByPk(id).then(billdata => {
            if (billdata) {
                db.bills.update(updatebillsDetails, { where: { bill_id: id } }).then(billData => {
                    res.status(200).json({
                        message: "bill details is updated successfully",
                        data: billData,
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
                    message: "bill not found",
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

    // delete the bills
    deletebills(req, res) {
        const id = req.params.id;
        db.bills.findByPk(id).then(billdata => {
            if (billdata) {
                db.bills.destroy({ where: { bill_id: id } }).then(billData => {
                    res.status(200).json({
                        message: "this bill is deleted",
                        data: billdata,
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
                    message: "bill not found",
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

export default new Bills();
