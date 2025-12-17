import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tanayapatne3126_db_user:CEs8lU0g0XVTmMQL@cluster0.zyrnorh.mongodb.net/"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // stop server if DB fails
  }
};

export default connectDB;