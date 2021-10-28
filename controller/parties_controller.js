import db from "../models/index.js";

class Parties {

    // add Parties
    addParties(req, res) {
        db.parties.create(req.body).then(partiesData => {
            res.status(201).json({
                message: "post created successfully",
                data: partiesData,
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

    // get all Parties
    getPartiesList(req, res) {
        db.parties.findAll().then(partiesData => {
            res.status(200).json({
                message: "data fetch successfully",
                data: partiesData,
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

    // get single Parties
    getSingleParties(req, res) {
        const id = req.params.id;
        db.parties.findByPk(id).then(partiesData => {
            if (partiesData) {
                res.status(200).json({
                    message: "data fetch successfully",
                    data: partiesData,
                    error: null
                });
            } else {
                res.status(404).json({
                    message: "parties not found",
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


    // update the Parties
    updateParties(req, res) {
        const id = req.params.id;
        const updatePartiesDetails = {
            party_name: req.body.party_name,
            contact_number: req.body.contact_number,
            address_line_1: req.body.address_line_1,
            address_line_2: req.body.address_line_2,
            landmark: req.body.landmark,
            state: req.body.state,
            city: req.body.city,
            pin_code: req.body.pin_code,
            county: req.body.county,
            updated_by: req.body.updated_by,
            added_by: req.body.added_by,
            company_id: req.body.company_id
        }   

        db.parties.findByPk(id).then(partiesdata => {
            if (partiesdata) {
                db.parties.update(updatePartiesDetails, { where: { party_id: id } }).then(partiesData => {
                    res.status(200).json({
                        message: "parties details is updated successfully",
                        data: partiesData,
                        error: null
                    });
                })
            } else {
                res.status(404).json({
                    message: "parties not found",
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


    // delete the Parties
    deleteParties(req, res) {
        const id = req.params.id;
        db.parties.findByPk(id).then(partiesdata => {
            if (partiesdata) {
                db.parties.destroy({ where: { party_id: id } }).then(partiesdData => {
                    res.status(200).json({
                        message: "stparties is deleted",
                        data: partiesdData,
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
                    message: "parties not found",
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

export default new Parties();
