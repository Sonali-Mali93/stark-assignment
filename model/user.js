const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, require: true,unique: true },
  password: { type: String, require: true },
  mobile: { type: String, require: true },
  email: { type: String, require: true ,unique: true},
});

module.exports = mongoose.model("user", userSchema);
