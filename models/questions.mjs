import mongoose from "mongoose";

export const QuestionModel = () => {
  const QuestionSchema = new mongoose.Schema({
    question: {
      type: "string",
    },
    options: {
      type: "array",
    },
    correct_option: {
      type: "string",
    },
  });
  mongoose.model("questions", QuestionSchema);
};
