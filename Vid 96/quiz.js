import express from "express";
import mongoose from "mongoose";
import { emp } from "./models/company.js";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3002;

mongoose.connect("mongodb://localhost:27017/Company");

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile("quiz.html", { root: __dirname });
});

function random(a, b) {
  return Math.floor(Math.random() * a) + b;
}

app.get("/generate", async (req, res) => {
  await emp.deleteMany({});

  let names = [
    "Mehwish", "Zehra", "yaseen", "Shahzaib", "Ali",
    "Uma", "Alina", "Kulsoom", "yawer", "almas", "apoorva", "sufi"
  ];

  for (let index = 0; index < 10; index++) {
    let a = random(12, 0); // Fix: should start from 0
    let s = random(1000000, 50000);

    const newEmp = new emp({
      name: names[a],
      salary: s
    });

    await newEmp.save();
  }

  let data = await emp.find();
  res.json(data);
});

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
