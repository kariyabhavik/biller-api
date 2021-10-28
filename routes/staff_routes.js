import Router from "express";
const router = Router();

import staffs from "../controller/staff_controller.js";


// router.post("/staffs", staffs.addStaff);
router.get("/staffs", staffs.addStaffList);
router.get("/staffs/:staff_id", staffs.getSingleStaff);
router.put("/staffs/:staff_id", staffs.updateStaff);
router.delete("/staffs/:staff_id", staffs.deleteStaff);
export default router; 