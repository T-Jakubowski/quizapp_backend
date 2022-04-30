import mongoose from "mongoose";

export const connection = () => {
  mongoose.connect("mongodb://127.0.0.1:27017/quizzapp", (error) => {
    if (error) {
      console.log("failure");
    } else {
      console.log("success");
    }
  });
};
