import { User } from "../models/user.model.js"
import { sendCookie } from "../utils/features.js"

export const user = (req, res) => {
  return res.send(`User Home `)
}
export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    return res.status(401).json({
      success: false,
      message: "User Not Found",
    })
  }
  const isPassMatch = user.password === password
  if (!isPassMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid Password",
    })
  }
  sendCookie(res, "User Logedin")
}

export const register = async (req, res) => {
  const { username, email, password } = req.body

  const user = await User.findOne({ email })

  if (user) {
    return res.json({
      message: "user already exist",
    })
  }

  await User.create({
    username,
    email,
    password,
  })
  return res.status(201).json({
    success: true,
    message: "user registered successfully",
  })
}
