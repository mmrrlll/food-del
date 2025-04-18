import mongoose, { Schema } from "mongoose";
const FoodOrderItemSchema = new mongoose.Schema(
  {
    food: { type: Schema.Types.ObjectId, ref: "food" },
    quantity: { type: Number, required: true },
  },
  { _id: false }
);
const FoodOrder = new mongoose.Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    totalPrice: { type: Number, require: true },
    foodOrderItems: { type: [FoodOrderItemSchema] },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERD"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);
export const FoodOrderModel = mongoose.model("foodOrder", FoodOrder);
