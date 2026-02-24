import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoutes.js"

const app = express()

app.use(bodyParser.json());
dotenv.config();

app.use("/api/user", route)

const PORT = process.env.PORT || 5000
const MONGOURL = process.env.MONGO_URL

mongoose.connect(MONGOURL).then(()=>{
    console.log("Database connected Successfully")
    app.listen(PORT , ()=>{
        console.log(`Server is running on PORT ${PORT}`)
    })
}).catch((err) => {
    console.error("DB Error:", err.message);
});

