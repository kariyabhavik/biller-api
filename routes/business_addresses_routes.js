import Router from "express";
const router = Router();

import Address from "../controller/business_address_controller.js";

router.post("/addresses", Address.addBussinessAddresses);
router.get("/addresses", Address.addressesList);
router.get("/addresses/:company_address_id" , Address.getSingleAddress);
router.patch("/addresses/:company_address_id" , Address.updateSingleAddress);
router.delete("/addresses/:company_address_id" , Address.deleteSingleAddress);

export default router;  