import db from "../models/index.js";

class BusinessStaffs {

    // // add BusinessStaffs
    addBusinessStaffs(req, res) {
        db.business_staffs.create(req.body).then(businessStaffs => {
            res.status(201).json({
                message: "post created successfully",
                data: businessStaffs,
                error: null
            });
        }).catch((error) => {
            console.log(error);
            res.status(500).json({
                message: "something went wrong",
                data: null,
                error: error
            }); 
        });
    }

    // get all BusinessStaffs
    getBusinessStaffs(req, res) {
        db.business_staffs.findAll().then(businessStaffs => {
            res.status(200).json({
                message: "data is fatch successfully",
                data: businessStaffs,    
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

    // get single BusinessStaffs
    getSingleBusinessStaff(req, res) { 
        const id = req.params.id;
        db.business_staffs.findByPk(id).then(businessStaffs => {
            if (businessStaffs) {
                res.status(200).json({
                    message: "data fetch successfully",
                    data: businessStaffs,
                    error: null
                });
            } else {
                res.status(404).json({
                    message: "BusinessStaffs not found",
                });
            }
        }).catch((error) => {
            res.status(500).json({
                message: "something went wrong",
                data: null,
            });
        });
    }
   

    // update the BusinessStaffs
    updateBusinessStaffs(req, res) {
        const id = req.params.id;
        const updateBusiness_Staffs = {
            company_id: req.body.company_id,
            staff_id: req.body.staff_id,
            updated_by: req.body.updated_by
        }
        db.business_staffs.findByPk(id).then(businessstaffs => {
            if (businessstaffs) {
                db.business_staffs.update(updateBusiness_Staffs, { where: { business_staffs: id } }).then(businessStaffs => {
                    res.status(200).json({
                        message: " this BusinessStaffs details is updated successfully",
                        data: businessstaffs,
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
                    message: "BusinessStaffs not found",
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


    // delete the BusinessStaffs
    deleteBusinessStaffs(req, res) {
        const id = req.params.id;
        db.business_staffs.findByPk(id).then(businessstaffs => {
            if (businessstaffs) {
                db.business_staffs.destroy({ where: { business_staffs: id } }).then(businessStaffs => {
                    res.status(200).json({
                        message: "this BusinessStaffs is deleted",
                        data: businessstaffs,
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
                    message: "BusinessStaffs not found",
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

export default new BusinessStaffs();