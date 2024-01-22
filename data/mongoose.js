import mongoose from "mongoose"

const mongoConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "Auth" })
    .then(() => console.log(`connected to mongo`))
    .catch((e) => console.log(`DB Connection Error : ${e}`))
}

export default mongoConnection
