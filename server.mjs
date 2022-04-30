import {connection} from "./models/connection.mjs";
import express from "express";
import path from "path";
import bodyparser from "body-parser";
import UserController from "./controllers/users.mjs";

connection();

const app = express();

app.use(bodyparser.urlencoded({
    extended: true,
}));

app.get('/', (req, res) => {
    res.send('Accueil');
})

app.use("/users", UserController);

app.listen("3000", () => {
    console.log('listening on http://localhost:3000');
})