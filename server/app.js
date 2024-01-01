const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const UserController = require("./controller/userConroller");

const uri = process.env.URI;
const app = express();
const port = process.env.PORT;

mongoose
  .connect(uri, {})
  .then((result) => console.log("database connected succesfully"))
  .catch((err) => console.log(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api", async (req, res) => {
  res.send("hai ngapain kesini :)");
});

app.get("/api/user", async (req, res) => {
  UserController.getAllUsers(req, res);
});

app.post("/api/user/register", async (req, res) => {
  UserController.createUser(req, res);
});

app.listen(port, () => {
  console.log(`app listening at port http://localhost:${port}`);
});
