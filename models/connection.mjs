import mongoose from "mongoose";

export const connection = () => {
  mongoose.connect("mongodb+srv://admin:4AJWpOmrLAfRCmTi@cluster0.pranc.mongodb.net/QuizApp?retryWrites=true&w=majority", (error) => {
    if (error) {
      console.log("failure");
    } else {
      console.log("success");
    }
  });
};
