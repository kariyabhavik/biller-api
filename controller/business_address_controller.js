import db from "../models/index.js";
class Address {

    // add addresses
    addBussinessAddresses(req, res) {
        db.business_addresses.create(req.body).then(businessAddressData => {
            res.status(201).json({
                message: "address created successfully",
                data: businessAddressData,
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

    // get all addresses
    addressesList(req, res) {
        db.business_addresses.findAll().then(businessAddressData => {
            res.status(200).json({    
                message: "address data is visible successfully",
                data: businessAddressData,
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

    // get a single address 
    getSingleAddress(req, res) {
        const id = req.params.company_address_id;
        db.business_addresses.findByPk(id).then(businessAddressData => {
            if (businessAddressData) {
                res.status(200).json({
                    message: "address data is visible successfully",
                    data: businessAddressData,
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

    // update the address
    updateSingleAddress(req, res) {
    const id = req.params.company_address_id;
    const updateAddress = {
        address_line_1 : req.body.address_line_1,
        address_line_2 : req.body.address_line_2,
        landmark : req.body.landmark,
        state : req.body.state,
        city: req.body.city,
        pin_code: req.body.pin_code,
        county: req.body.county,
        active_status : req.body.active_status,
    }

    db.business_addresses.findByPk(id).then( businessaddressdata => {
        if (businessaddressdata) {
            db.business_addresses.update(updateAddress , { where: { company_address_id : id} }).then( businessAddressData => {
                res.status(200).json({
                    message: "address details is updated successfully",
                    data: businessaddressdata,
                    error: null
                });
            })
        }else{
            res.status(404).json({
                message: "address not found",
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

// delete the address
deleteSingleAddress(req, res) {
    const id = req.params.company_address_id;
    db.business_addresses.findByPk(id).then(addressdata => {
        if (addressdata) {
            db.business_addresses.destroy({ where : { company_address_id : id } }).then(addressData => {
                res.status(200).json({
                    message: "business is deleted",
                    data: addressdata,
                    error: null  
                });
            })
        }else{
            res.status(404).json({
                message: "address not found",
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
export default new Address();

