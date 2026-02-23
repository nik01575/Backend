//! Middleware ek function hota hai jo request aur response k beech me kaam krta hai.

// Client  -->  Server --> Response
// Esk bech me jo baith k kaam kre = Middleware

//! Middleware is a function that has access to request, response, and next function, and is used to modify, validate or control the request - response cycle.

//! Ex : When you'll go to the mall. Before the entry:
// Guard checks you, scan bags, Temperature check  --> then only entry will be given.

// Request → Middleware → Middleware → Route → Response
// User → Login Check → Token Check → Data → Response


//~ Structure of Middleware
// function(req, res, next){
    // body
//     next()
// }

// req --> user ka data
// res --> response bhejne k liye
// next() --> next middleware ko call (very important : agar next nhi likha toh request whi ruk jyegi).


// const express = require("express");
// const app = express()
//? Creates an Express application. The express() function is a top-level function exported by the express module.

// const express = require("express");
// const app = express();

// // Middleware
// app.use((req, res, next) => {
//     console.log("Request aa gya");
//     next(); // aage bhejo
// });

// // Route
// app.get("/", (req, res) => {
//     res.send("Hello Bhai 2");
// });

// // Server start
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


//! Types of Middlewares : Express has mainly 5 types of middlewares : 

//? Application Level Middleware : Pure App pe lge. Runs on every request.

// app.use((req, res, next)=>{
//     console.log("Every Request")
//     next();
// });
// app.listen(3000)

//? Route Level Middleware : Sirf ek route pe lge. Sirf /profile pe lgega.

// function checkLogin(req,res,next){
//     let login = true;

//     if(login){
//         next();
//     }else{
//         res.send("Login Kro Bhai")
//     }
// }
// app.get("/profile", checkLogin, (req, res)=>{
//     res.send("This is Profile Page 2")
// })
// app.listen(3000)

//? Built-in Middleware : Express ka khud ka middleware : JSON Middleware

// app.use(express.json());

// app.listen(3000)

//? Third Party Middleware : npm se install krte hai. Ex: morgan (logging)
// npm install morgan

// const morgan = require("morgan")
// app.use(morgan("dev"))

// app.listen(3000)


//? Error Handling Middleware : Special hota hai (4 parameters). Jav error aata hai --> tb ye chalta hai.

// app.use((err,req,res,next)=>{
//     res.status(500).send("Error aaya bhai")
// });
// app.listen(3000)



//! Notes & Interview Questions : 

// In Industry Middle used for : 
// Login Check
// JWT verify
// API rate limit
// Logging 
// File Upload
// Validation
// CORS
// Error Handling
// --> Almost Har project me middleware hota hai

// Q1. What is middleware?
// Function between request and response.

// Q2. Why use middleware?
// Reusable logic, security, validation, clean code.

// Q3. Types of middleware?
// App, Route, Built-in, Third-party, Error.

// Q4. What is next()?
// Pass control to next middleware.

// Q5. Can middleware stop request?
// Yes, by not calling next().

// Q6. Order important?
// YES 
// Top to bottom execute hota hai.