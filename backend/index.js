import express, { json } from "express";
import { connectMongoDB } from "./ConnectDB.js";
import { userRouter } from "./routes/user.js";
import cors from "cors";

const port = 8000;
const app = express();
connectMongoDB();
app.use(cors());
app.use(json());
app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`server runnning at http://localhost:${port}`);
});
