import express from "express"
import {
  check,
  login,
  register,
  user,
} from "../controllers/user.controllers.js"

const router = express.Router()

router.get("/", user)
router.get("/check", check)
router.post("/register", register)
router.post("/login", login)

export default router
