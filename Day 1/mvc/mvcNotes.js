//! MVC = Code ko 3 parts me tod dena taaki project clean, scalable aur easy ho.

// In Node.js with Express, MVC is an architectural pattern where Model handles data, Controller handles business logic, and View handles response formatting.

// project/
// │
// ├── models/
// │    └── userModel.js
// │
// ├── controllers/
// │    └── userController.js
// │
// ├── routes/
// │    └── userRoutes.js
// │
// ├── views/   (optional for APIs)
// │
// ├── app.js
// └── server.js

//! Flow : 

// User
//   ↓
// Route
//   ↓
// Controller
//   ↓
// Model (DB)
//   ↑
// Controller
//   ↓
// Response (JSON)


//! Code Execution
// 1. userModel
// 2. userController
// 3. userRoutes
// 4. app.js

//! Why we are using MVC ?
// Agar MVC nahi use karega ❌
// Sab code ek file me:
// Samajh nahi aayega
// Debug mushkil
// Team work kharab

// MVC se:
// Clean code
// Easy maintain
// Team friendly
// Scalable
// Professional project


//? Interview Questions : 

//* Q1. What is MVC in Express?
// Architecture dividing code into Model, View, Controller.

//* Q2. Where is business logic?
// Controller

//* Q3. Does Express follow MVC?
// Yes, by folder structure (not built-in).

//* Q4. Is MVC mandatory?
// No, but best practice.

//* Q5. View in REST API?
// JSON response.

//* Q6. MVC vs Non-MVC (Difference)
// | Without MVC | With MVC        |
// | ----------- | --------------- |
// | Messy       | Clean           |
// | One file    | Multiple layers |
// | Hard debug  | Easy debug      |
// | No scale    | Scalable        |
