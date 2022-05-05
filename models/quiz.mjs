import mongoose from "mongoose";

export const QuizModel = () => {
  const QuizSchema = new mongoose.Schema({
    name: {
      type: "string",
    },
    theme: {
      type: "string",
    },
  });
  mongoose.model("quizzes", QuizSchema);
};
