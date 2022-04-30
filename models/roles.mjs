import mongoose from "mongoose";

export const RoleModel = () => {
  const RoleSchema = new mongoose.Schema({
    name: {
      type: "string",
    },
    permission: {
      type: "string",
    },
  });
  mongoose.model("roles", RoleSchema);
};
