import mongoose, { Schema } from "mongoose";

const Food = new mongoose.Schema(
  {
    id: { type: Schema.Types.ObjectId, ref: "food" },
    foodName: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "category" },
  },
  { timestamps: true }
);
export const FoodModel = mongoose.model("food", Food);
