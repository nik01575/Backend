const express = require("express")
const app = express()
const userModel = require("./usermodel")

app.get("/", (req, res) => {
    res.send("hey");
})

app.get('/create', async (req, res) => {
    let createdUser = await userModel.create({
        name: "nikhil",
        email: "nikhil@gmail.com",
        username: "nik"
    })
    res.send(createdUser)
})

app.get('/update', async (req, res) => {
    let updatedUser = await userModel.findOneAndUpdate(
        { username: "nik" }, // search condition
        { name: "Shashi" }, // new data
        { new: true });// return updated doc
    res.json(updatedUser)
})

app.get("/read", async (req,res) => {
    let users = await userModel.find(); // for reading all the users
    // let users = await userModel.findOne({username : "nik"}); // only 1 whose username is nik
    res.send(users)
})

app.get("/delete", async(req, res)=>{
    let users = await userModel.findOneAndDelete({username : "nik"})
    res.send(users)
})


app.listen(3000, () => {
    console.log("Server started on port 3000 ✅");
});