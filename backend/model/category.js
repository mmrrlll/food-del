import mongoose, { Schema } from "mongoose";

const foodCategory = new mongoose.Schema(
  {
    id: { type: Schema.Types.ObjectId, ref: "food" },
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);
export const CategoryModel = mongoose.model("category", foodCategory);
