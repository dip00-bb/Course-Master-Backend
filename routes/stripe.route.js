import { Router } from "express";
import { payment } from "../controllers/sripe.controller.js";

const router = Router()

router.post('/checkout', payment)

export default router