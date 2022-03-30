/* const http = require("http");

const app = require("./app");

app.set("port", 3000);

const server = http.createServer(app); */

/* const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/health', (req, res) => {
    res.send('I')
})

app.listen(8080, () => {
    console.log("Server up and running")
}) */

const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/quizzapp", (error) => {
    if (error){
        console.log("failure");
    } else {
        console.log("success")
    }
});