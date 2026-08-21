import express from "express";
import { register,login,updateProfile, logOut } from "../controllers/user.controllers.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logOut").get(logOut)
router.route("/profile/update").post(isAuthenticated,updateProfile);

export default router;