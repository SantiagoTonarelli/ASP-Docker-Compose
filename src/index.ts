import express, { Request, Response } from "express";
import mongoose from "mongoose";
import User from "./models/user";

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB_URL as string)
  .then(() => console.log("Conexión a MongoDB establecida"))
  .catch((err) => console.error("No se pudo conectar a MongoDB:", err));

// This isn't a good practice, but it's just for testing purposes
app.get("/create-user", async (req: Request, res: Response) => {
  const user = new User();
  user.nombre = "User " + Math.floor(Math.random() * 1000);
  await user.save();
  res.status(201).send(user);
});

app.get("/users", async (req: Request, res: Response) => {
  const users = await User.find({});
  res.send(users);
});

app.listen(3000, () => {});
