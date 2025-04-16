import express from "express";
import { createUser, getUsers, getUsersID } from "../controller/user.js";

export const userRouter = express.Router();
userRouter.post("/", createUser).get("/", getUsers).get("/:id", getUsersID);
