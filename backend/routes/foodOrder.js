import express from "express";
import { createFoodOrder, getFoodOrder } from "../controller/foodOrder.js";

export const foodOrderRouter = express.Router();
foodOrderRouter.post("/", createFoodOrder).get("/", getFoodOrder)
