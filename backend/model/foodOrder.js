import mongoose, { Schema } from "mongoose";

const FoodOrder = new mongoose.Schema({
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const FoodOrderModel = mongoose.model("foodOrder", FoodOrder);
