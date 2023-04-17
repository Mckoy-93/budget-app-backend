// create and config my express app;

const express = require("express");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to budget app");
})
//const transactionsController = require("./controllers/transactionsController.js")
//const cors = require("cors")

module.exports = app;