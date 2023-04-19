// create and config my express app;

const express = require("express");
const transController = require("./controllers/transactionsController.js")
const cors = require("cors")

//MIDDLEWARE
//CONFIG
const app = express();
app.use(express.json());
//CONNECT TO FRONTEND
app.use(cors());

app.use("/transactions", transController)

app.get("/", (req, res) => {
    //console.log(GET request)
    res.send("Welcome to the Budget App");
})

app.get("*", (res) => {
    res.status(404).json({error: "Not found"})
})

module.exports = app;