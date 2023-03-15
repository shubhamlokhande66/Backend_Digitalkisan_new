const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require('cors');
const mongoose = require("mongoose");
const passport = require("passport");
const app = express();

const PORT = 4000 

const URI ="mongodb+srv://kisanking:Shubham%401998@cluster0.fd3ha.mongodb.net/kisan?retryWrites=true&w=majority";

  app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static("public"));
mongoose
  .connect(URI)
  .then(() => {
    console.log("MongoDB database connection established successfully !");
  })
  .catch((err) => console.log(err,"No connection !"));














  

  app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
  });