import mongoose from "mongoose";

export const UserModel = () => {
  const UserSchema = new mongoose.Schema({
    lastName: {
      type: "string",
    },
    firstName: {
      type: "string",
    },
    login: {
      type: "string",
    },
    password: {
      type: "string",
    },
  });
  
  mongoose.model("users", UserSchema);
}


