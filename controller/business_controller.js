import db from "../models/index.js";
class Business {

    // add business
    async addBusiness(req, res) {
        try {
            let existingData = await db.businesses.findAll({
                where: {
                    company_contact_number: req.body.company_contact_number
                }
            });

            if (existingData.length == 0) {

                db.businesses.create(req.body).then(businessData => {
                    res.status(201).json({
                        message: "business created successfully",
                        data1: businessData,
                        error: null 
                    });
                }).catch((error) => {
                    res.status(500).json({
                        message: "something went wrong",
                        data: null,
                        error: error
                    });
                });

            } else {
                res.status(400).json({
                    message: "Company Contact Number already exists",
                });
            }
        } catch (error) {
            res.status(500).json({
                message: "something went...wrong....",
                error: error
            });
        }
    }

    // get all data
    bussinessList(req, res) {
        db.businesses.findAll(req.body , {
            include: "addresses",
        }).then(businessData => {
            res.status(200).json({
                message: "data is featch successfully",
                data: businessData,
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

    // get a single business
    getSingleBusiness(req, res) {
        const id = req.params.company_id;
        db.businesses.findByPk(id).then(businessData => {
            if (businessData) {
                res.status(200).json({
                    message: "data is visible successfully",
                    data: businessData,
                    error: null
                })
            } else {
                res.status(400).json({
                    message: "business not found",
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

    // update the business
    updateBusiness(req, res) {
        const id = req.params.company_id;
        const updateBusiness = {
            company_name: req.body.company_name,
            company_contact_number: req.body.company_contact_number,
            updated_by: req.body.updated_by
        }
        db.businesses.findByPk(id).then(businessdata => {
            if (businessdata) {
                db.businesses.update(updateBusiness, { where: { company_id: id } }).then(businessData => {
                    res.status(200).json({
                        message: "business details is updated successfully",
                        data: businessData,
                        error: null
                    });
                })
            } else {
                res.status(400).json({
                    message: "business not found",
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

    // delete the company
    deleteBusiness(req, res) {
        const id = req.params.company_id;
        db.businesses.findByPk(id).then(businessdata => {
            if (businessdata) {
                db.businesses.destroy({ where: { company_id: id } }).then(businessData => {
                    res.status(200).json({
                        message: "this business is deleted",
                        data: businessdata,
                        error: null
                    });
                })
            } else {
                res.status(400).json({
                    message: "business not found",
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
export default new Business();