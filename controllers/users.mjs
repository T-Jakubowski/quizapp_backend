import express from "express";
import mongoose from "mongoose";
import { UserModel } from "../models/users.mjs";

UserModel();

const router = express.Router();
const UserSchema = mongoose.model("users");

//récupère tous les users
router.get("/readall", (req, res) => {
  UserSchema.find((err, docs) => {
    if (!err) {
      res.send(docs);
    }
    else {
      console.log("failed");
    }
  });
});

//récupère un user spécifuque grace a son prenom
router.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserSchema.findById(id);
    res.json(user);
  } catch (err) {
    console.log("failed");
  }
});

//créer un user
router.post("/create", (req, res) => {
  UserSchema.find((err, docs) => {
    if (!err) {
      var user = new UserSchema();
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.login = req.body.login;
      user.password = req.body.password;
      user.save();
      res.send("User Create");
    }
  });
});

//delete un user
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await UserSchema.findByIdAndDelete(id);
    res.json("deleted successfully");
  } catch (err) {
    console.log("failed");
  }
});

//update users
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await UserSchema.updateOne(
      { _id: id },
      { $set: { lastName: req.body.lastName } }
    );
    res.json(updated);
  } catch (err) {
    console.log("failed");
  }
});

export default router;
