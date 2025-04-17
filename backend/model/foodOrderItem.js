import mongoose, { Schema } from "mongoose";

const FoodOrderItem = new mongoose.Schema({
    quantity: {type: Number, required:true}
});
export const FoodOrderItemModel = mongoose.model("foodOrderItem", FoodOrderItem);
