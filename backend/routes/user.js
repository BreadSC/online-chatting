import express from "express";
import protectRoute from "../app/middleware/protectRoute.js";
import { getUsersForSidebar } from "../app/controllers/userController.js";

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);

export default router;
