const express = require("express");
const mongoose = require("mongoose");
const app = new express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv").config();
const Agent = require("./models/agent");

//mongo url: mongodb+srv://yam:${process.env.PASSWORD}@database.foklg.mongodb.net/practiceData?retryWrites=true&w=majority

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
