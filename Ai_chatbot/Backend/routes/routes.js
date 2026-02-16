import express from "express";
import { chatWithAI } from "../controllers/chatController.js";
import { validateChatMessage } from "../middleware/validation.js";

const router = express.Router();

router.post("/chat", validateChatMessage, chatWithAI);

export default router;
