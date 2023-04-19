// create and config my express app;

const express = require("express");
const transactionsController = require("./controllers/transactionsController.js")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController)

app.get("/", (req, res) => {
    res.send("Welcome to the Budget App");
})

app.get("*")

module.exports = app;