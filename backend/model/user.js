import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  phoneNumber: String,
  address: String,
  isVerified: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const UserModel = mongoose.model('User',userSchema)
