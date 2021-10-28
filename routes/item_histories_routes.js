import Router from "express";
const router = Router();

import ItemHistories from "../controller/item_histories_controller.js";

// get all bussiness_info
router.post("/histories", ItemHistories.addItemHistories);
router.get("/histories", ItemHistories.getItemHistories);
router.get("/histories/:id", ItemHistories.getSingleItemHistories);
router.patch("/histories/:id", ItemHistories.updateItemHistories);
router.delete("/histories/:id", ItemHistories.deleteItemHistories);

export default router; 