import express from "express";
const router = express.Router();
import { verifyToken } from "../middleware/verifyUser";
import { UserController } from "../controllers/userController";
const userController = new UserController();

router.get("/", verifyToken, userController.home);
// router.get("/signout" , userController.signOut);
router.post("/register", userController.signUp);
router.post("/login", userController.signIn);

export default router;
