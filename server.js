import { app } from "./app.js"
import mongoConnection from "./data/mongoose.js"

mongoConnection()
app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`)
})
