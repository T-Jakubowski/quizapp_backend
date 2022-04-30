import express from "express";
import mongoose from "mongoose";
import { QuizModel } from "../models/quiz.mjs";

QuizModel();

const router = express.Router();
const QuizSchema = mongoose.model("quiz");

//récupère tous les quiz
router.get("/readall", (req, res) => {
  QuizSchema.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("failed");
    }
  });
});

//récupère un quiz spécifique grace a son id
router.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const quiz = await QuizSchema.findById(id);
    res.json(quiz);
  } catch (err) {
    console.log("failed");
  }
});

//créer un quiz
router.post("/create", (req, res) => {
  QuizSchema.find((err, docs) => {
    if (!err) {
      var quiz = new QuizSchema();
      quiz.name = req.body.name;
      quiz.theme = req.body.theme;
      quiz.save();
      res.send("Quiz Create");
    }
  });
});

//delete un quiz
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await QuizSchema.findByIdAndDelete(id);
    res.json("deleted successfully");
  } catch (err) {
    console.log("failed");
  }
});

//update quiz
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await QuizSchema.updateOne(
      { _id: id },
      { $set: { name: req.body.name, theme: req.body.theme } }
    );
    res.json(updated);
  } catch (err) {
    console.log("failed");
  }
});

export default router;
