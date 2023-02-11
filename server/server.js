const express=require('express');

const server = express();

const mongoose = require("mongoose");

const cors = require("cors");

server.use(cors());


server.use(express.json({extended:false}));
mongoose
  .connect("mongodb://127.0.0.1:27017/formData")
  .then(() => console.log("db conected"));
// server.post("/formdata",formController)






server.listen(3000, () => console.log("server run on port 3000"));

