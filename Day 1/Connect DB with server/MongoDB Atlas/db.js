const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nikhilDemo:12345@demolearn.oabmlod.mongodb.net/?appName=DEMOLearn"
    );

    console.log("MongoDB Atlas Connected ✅");

  } catch (error) {
    console.log("DB Error ❌", error);
  }
};

module.exports = connectDB;