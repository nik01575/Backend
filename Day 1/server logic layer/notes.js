//! Server Logic Layer wo jagahhai jaha asli dimaag ka code likha jata hai.
// Ex : decision, calculation, rules, validation, process.

// Server Logic Layer (Business Logic Layer) contains the core application rules and processing logic, independent of routing and database operations.

//& routes → controllers → services → models

// | Layer                   | Kaam             |
// | ----------------------- | ---------------- |
// | Routes                  | URL handle       |
// | Controller              | Request/Response |
// | ⭐ Service (Logic Layer) | Real Logic       |
// | Model                   | Database         |

// Service Layer = Logic Layer


//?

// Soch tu bank gaya:
// Kaam: Paisa Transfer

// Process:
// Counter pe gaya (Route)
// Clerk ne form liya (Controller)
// Bank system ne check kiya (Logic)
// Database update (Model)

//^ MVC + Logic Layer Ka Relation

// Normally MVC me: Controller → Model
// But professional projects me: Controller → Service → Model
// Client
//   ↓
// Route
//   ↓
// Controller
//   ↓
// Service (Logic Layer)
//   ↓
// Model (DB)

//! Interview Questions

// Q1. What is Logic Layer?
// Layer handling business rules and processing.

// Q2. Why separate logic from controller?
// Clean code, reuse, maintainability.

// Q3. Where is it in Express?
// Usually in services folder.

// Q4. Can controller have logic?
// Minimal, but main logic in service.

// Q5. Difference: Controller vs Service?
// Controller	Service
// HTTP handle	Business rules
// req/res	Pure logic
// Routing	Processing