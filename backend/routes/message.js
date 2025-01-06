import express from "express";
import {
  getMessages,
  sendMessage,
} from "../app/controllers/messageController.js";
import protectRoute from "../app/middleware/protectRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
