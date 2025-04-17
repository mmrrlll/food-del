import express from "express";
import { createFoodOrderItem, getFoodOrderItem } from "../controller/foodOrderItem.js";

export const foodOrderItemRouter = express.Router();
foodOrderItemRouter.post("/", createFoodOrderItem).get("/", getFoodOrderItem)
