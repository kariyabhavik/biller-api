import Router from "express";
const router = Router();

import parties from "../controller/parties_controller.js";

router.post("/parties", parties.addParties);
router.get("/parties", parties.getPartiesList);
router.get("/parties/:id", parties.getSingleParties);
router.patch("/parties/:id", parties.updateParties);
router.delete("/parties/:id", parties.deleteParties);

export default router; 