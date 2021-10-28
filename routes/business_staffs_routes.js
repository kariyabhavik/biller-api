import Router from "express";
const router = Router();

import Businessstaffs from "../controller/business_staffs_controller.js";

router.post("/businessstaffs",Businessstaffs.addBusinessStaffs);
router.get("/businessstaffs", Businessstaffs.getBusinessStaffs);
router.get("/businessstaffs/:id", Businessstaffs.getSingleBusinessStaff);
router.patch("/businessstaffs/:id", Businessstaffs.updateBusinessStaffs);
router.delete("/businessstaffs/:id", Businessstaffs.deleteBusinessStaffs);

export default router; 