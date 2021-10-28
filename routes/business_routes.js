import Router from "express";
const router = Router();
import Business from "../controller/business_controller.js";
// get all bussiness_info

router.post("/businesses" , Business.addBusiness); 
router.get("/businesses" , Business.bussinessList);
router.get("/businesses/:company_id", Business.getSingleBusiness);
router.put("/businesses/:company_id", Business.updateBusiness);
router.delete("/businesses/:company_id", Business.deleteBusiness);
export default router ;