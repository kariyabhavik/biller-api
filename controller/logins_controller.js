import db from "../models/index.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

class Logins {

    async registration(req, res) {

        try {
            
            const transaction = await db.sequelize.transaction();
            // req.body.staffs.ipAddress = req.ip;
            let existingData = await db.logins.findAll({
                where: {
                    mobile_number: req.body.mobile_number
                }
            });

            if (existingData.length == 0) {
                const firstName = req.body.first_name;
                const lastName = req.body.last_name
                req.body.first_name = firstName;
                req.body.last_name = lastName;

                db.staffs.create(req.body, {
                    transaction: transaction

                }).then(staffDetails => {

                    let staffId = staffDetails.staff_id;
                    req.body.staff_id = staffId;

                    bcryptjs.genSalt(10, function (error, salt) {
                        bcryptjs.hash(req.body.password, salt, function (error, hash) {
                            req.body.password = hash;
                            db.logins.create(req.body, {
                                transaction: transaction
                            }).then(registration => {
                                transaction.commit();
                                res.status(201).json({
                                    message: "post fetch successfully",
                                    staffDetails: staffDetails,
                                    registration: registration,
                                    error: null
                                });

                            }).catch((error) => {
                                transaction.rollback();
                                res.status(500).json({
                                    message: "something went wrong",
                                    data: null,
                                    error: error
                                });
                            });
                        });
                    });

                }).catch((error) => {
                    console.log(error);
                    transaction.rollback();
                    res.status(500).json({
                        message: "something went wrong.......",
                        data: null,
                        error: error
                    });
                });

            } else {
                res.status(400).json({
                    message: "mobile number is already exists",
                });
            }  

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "something went...wrong",
                error: error
            });
        }
    }

    login(req, res) {
        db.logins.findOne({ where: { mobile_number: req.body.mobile_number } }).then(staff => {
            if (staff === null) {
                res.status(400).json({
                    message: `${req.body.mobile_number} is not registered with us`,
                    error: error
                });
            } else {
                bcryptjs.compare(req.body.password, staff.password, function (error, result) {
                    if (result) {
                        const token = jwt.sign({
                            mobile_number: staff.mobile_number,
                            password: staff.password
                        }, 'secret', function (error, token) {
                            res.status(200).json({
                                message: "Authentication Successfull",
                                token: token
                            });
                        });
                    } else {
                        res.status(400).json({
                            message: "Password incorrect",
                            error: error
                        });
                    }
                });
            }
        }).catch(error => {
            res.status(401).json({
                message: "Invalid Credentials!",
                error: error
            });
        });
    }

}

export default new Logins();