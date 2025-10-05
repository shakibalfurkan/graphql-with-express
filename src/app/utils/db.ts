import mongoose from "mongoose";
import config from "../config";

async function connectToDatabase() {
  try {
    await mongoose.connect(config.db_url as string);
    console.log(`🛢 Database is connected successfully`);
  } catch (err) {
    console.log("Failed to connect database", err);
  }
}

export default connectToDatabase;
