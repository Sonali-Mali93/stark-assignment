const express = require("express");
const mongoose = require("mongoose");
const route = require('./route/route')

const app = express();
const PORT = 3000;
app.use(express.json());

mongoose
  .connect("enter your srv string/starkDB")
  .then(() => console.log("Database is connected"))
  .catch((error) => console.log(error));

app.use('/', route)

app.get("/", (req, res) => {
  res.send("Hello");
});
app.listen(PORT, () => {
  console.log("Server isrunning on PORT", PORT);
});
