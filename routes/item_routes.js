import Router from "express";
const router = Router();

import Item from "../controller/items_controller.js";

router.post("/items", Item.addItems);
router.get("/items", Item.getItems);
router.get("/items/:id", Item.getSingleItems);
router.patch("/items/:id", Item.updateItem);
router.delete("/items/:id", Item.deleteItem);
export default router; 