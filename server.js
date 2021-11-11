const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();
const Agent = require("./models/agent");

mongoose.connect(
  `mongodb+srv://yam:${process.env.PASSWORD}@database.foklg.mongodb.net/practiceData?retryWrites=true&w=majority`,
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

//this route return array with all the agents that live the city the user insert as query
app.get("/agents/?", function (req, res) {
  Agent.find({ city: req.query.city }).then((agents) => {
    res.json(agents);
  });
});

//this route edit agent from the data base and return it
app.put("/agents/:id/edit", function (req, res) {
  Agent.updateOne(
    { license_id: Number(req.params.id) },
    { $set: { city: req.headers.city } },
    function (err, docs) {
      if (err) {
        console.log(err);
      }
    }
  );
  Agent.find({ license_id: Number(req.params.id) }).then((agent) => {
    res.json(agent);
  });
});
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
