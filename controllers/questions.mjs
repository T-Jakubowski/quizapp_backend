import express from "express";
import mongoose from "mongoose";
import { QuestionModel } from "../models/questions.mjs";

QuestionModel();

const router = express.Router();
const QuestionSchema = mongoose.model("questions");

//récupère tous les questions
router.get("/readall", (req, res) => {
  QuestionSchema.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("failed");
    }
  });
});

//récupère une question spécifique grace a son id
router.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const question = await QuestionSchema.findById(id);
    res.json(question);
  } catch (err) {
    console.log("failed");
  }
});

//créer une question
router.post("/create", (req, res) => {
  QuestionSchema.find((err, docs) => {
    if (!err) {
      var question = new QuestionSchema();
      question.question = req.body.question;
      question.options = req.body.options;
      question.correct_option = req.body.correct_option;
      question.save();
      res.send("Question Create");
    }
  });
});

//delete une question
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await QuestionSchema.findByIdAndDelete(id);
    res.json("deleted successfully");
  } catch (err) {
    console.log("failed");
  }
});

//update question
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await QuestionSchema.updateOne(
      { _id: id },
      {
        $set: {
          question: req.body.question,
          options: req.body.options,
          correct_option: req.body.correct_option,
        },
      }
    );
    res.json(updated);
  } catch (err) {
    console.log("failed");
  }
});

export default router;
