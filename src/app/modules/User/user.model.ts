import { Schema, model } from "mongoose";
import type { TUser } from "./user.interface";
import bcrypt from "bcryptjs";

const userSchema = new Schema<TUser>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    password: { type: String, required: true, select: 0 },
    phone: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

//pre save middleware / hook
userSchema.pre("save", async function (next) {
  //hashing password and save in database
  this.password = await bcrypt.hash(this.password, 6);

  next();
});

//remove password string after saving data when we get the data from database
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
