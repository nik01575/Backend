import express from "express"
import { fetch, create, update, deleteUser } from "../controller/userController.js"

const route = express.Router()

// Create User
route.post("/create", create)

// Fetch Users
route.get("/getAllUsers", fetch)

// Update Users
route.put("/update/:id", update)

// delete Users
route.delete("/delete/:id", deleteUser)

export default route