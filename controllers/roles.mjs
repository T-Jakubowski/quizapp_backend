import express from "express";
import mongoose from "mongoose";
import { RoleModel } from "../models/roles.mjs";

RoleModel();

const router = express.Router();
const RoleSchema = mongoose.model("roles");

//récupère tous les roles
router.get("/readall", (req, res) => {
  RoleSchema.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log("failed");
    }
  });
});

//récupère un role spécifique grace a son id
router.get("/read/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const role = await RoleSchema.findById(id);
    res.json(role);
  } catch (err) {
    console.log("failed");
  }
});

//créer un role
router.post("/create", (req, res) => {
  RoleSchema.find((err, docs) => {
    if (!err) {
      var role = new RoleSchema();
      role.name = req.body.name;
      role.permission = req.body.permission;
      role.save();
      res.send("Role Create");
    }
  });
});

//delete un role
router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await RoleSchema.findByIdAndDelete(id);
    res.json("deleted successfully");
  } catch (err) {
    console.log("failed");
  }
});

//update role
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updated = await RoleSchema.updateOne(
      { _id: id },
      { $set: { name: req.body.name, permission: req.body.permission } }
    );
    res.json(updated);
  } catch (err) {
    console.log("failed");
  }
});

export default router;
