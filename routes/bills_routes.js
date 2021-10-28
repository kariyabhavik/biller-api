import Router from "express";
const router = Router();

import bills from "../controller/bills_controller.js";

router.post("/bills", bills.addbills);
router.get("/bills", bills.getbillsList);
router.get("/bills/:id", bills.getSinglebills);
router.patch("/bills/:id", bills.updatebills);
router.delete("/bills/:id", bills.deletebills);

export default router; 