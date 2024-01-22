import express from "express"
import { login, register, user } from "../controllers/user.controllers.js"

const router = express.Router()

router.get("/", user)
router.post("/register", register)
router.post("/login", login)

export default router
