import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";

dotenv.config();

const mongoString = process.env.DB_URL;
const db = mongoose.connection;
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db.on("error", (error) => {
  console.log(error);
});
db.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", userRoutes);

app.listen(3000, () => {
  console.log(`Server Running at ${3000}`);
});
