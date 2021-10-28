import Router from "express";
const router = Router();

import login from "../controller/logins_controller.js";

router.post("/registration",login.registration);
router.post("/login",login.login);
export default router; 