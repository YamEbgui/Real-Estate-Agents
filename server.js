const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();
const Agent = require("./models/agent");

//mongo url: mongodb+srv://yam:${process.env.PASSWORD}@database.foklg.mongodb.net/practiceData?retryWrites=true&w=majority
mongoose.connect(
  `mongodb+srv://yam:yamivgi8947@database.foklg.mongodb.net/practiceData?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(cors());

//this route return array of cities in the collection agent of database.
app.get("/cities", function (req, res) {
  Agent.find({})
    .distinct("city") // distinct values
    .then((cities) => {
      res.json(cities);
    });
});

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
