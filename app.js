import Express from "express"
import { config } from "dotenv"
import userRouter from "./routers/user.router.js"
import cors from "cors"
export const app = Express()
config({
  path: "./config/.env",
})

app.use(
  cors({
    options: [process.env.FORNTENDURL],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
)
app.use(Express.json())
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
  res.send("Home")
})
