import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongoDbURL = process.env.MONGODB_URL as string;

export default (async() => {
  try {
    await mongoose.connect(mongoDbURL);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Sale del proceso si no se puede conectar a la base de datos
  }
})(); // Llama a la función inmediatamente para conectar a MongoDB