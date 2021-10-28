import db from "../models/index.js";

class Staffs {
    // get all data
    addStaffList(req, res) {
        db.staffs.findAll().then(staffData => {
            if (staffData) {
                res.status(200).json({
                    message: " staff data featch successfully",
                    data: staffData,
                    error: null
                });
            }else{
                res.status(404).json({ 
                    message: "staff is not found",
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

    // get single staff
    getSingleStaff(req, res) {
        const id = req.params.staff_id;
        db.staffs.findByPk(id).then(staffData => {
            if (staffData) {
                res.status(200).json({
                    message: "staff data featch successfully",
                    data: staffData,
                    error: null
                })
            } else {            
                res.status(404).json({ 
                    message: "staff not found",
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

    // update the staff
    updateStaff(req, res) {
        const id = req.params.staff_id;
        const updateStaffDetails = { 
            first_name: req.body.first_name,
            middle_name: req.body.middle_name,
            last_name: req.body.last_name,
            alternate_mobile_number: req.body.alternate_mobile_number,   
            email_address: req.body.email_address,
            date_of_birth: req.body.date_of_birth,
            gender: req.body.gender,
        }
        db.staffs.findByPk(id).then(staffdata => {
            if (staffdata) {
                db.staffs.update(updateStaffDetails, { where: { staff_id: id } }).then(staffData => {
                    res.status(200).json({
                        message: "staff details is updated successfully",
                        data: staffData,
                        error: null
                    });
               })
            } else {
                res.status(400).json({
                    message: "staff not found",
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


    // delete the staff
    deleteStaff(req, res) {
        const id = req.params.staff_id;
        db.staffs.findByPk(id).then(staffdata => {
            if (staffdata) {
                db.staffs.destroy({ where: { staff_id: id } }).then(staffData => {
                    res.status(200).json({
                        message: "this staff is deleted successfully",
                        data: staffdata,
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
                res.status(400).json({
                    message: "staff not found",
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

export default new Staffs();