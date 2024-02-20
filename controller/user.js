const user = require("../model/user");
const bcrypt = require("bcrypt");

// User Registration
const registerUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let mobile = req.body.mobile;
  let email = req.body.email;

  const existinguser = user.findOne({ username });
  if (existinguser) {
    res.status(400).json({ message: "Username already exists" });
  } else {
    let userPassword = bcrypt.hashSync(password, 10);
    password = userPassword;
    user
      .create({ username, password, mobile, email })
      .then((data) => {
        res.status(200).json({ message: "User Registration is successfull" });
      })
      .catch((error) => {
        res.status(500).json({
          message: "Error while adding a user to the database",
          error,
        });
      });
  }
};

// User Login
const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  user
    .findOne({ username })
    .then((data) => {
      console.log(data);
      if (username && bcrypt.compareSync(password, data.password)) {
        res.status(200).json({ message: "User is successfully login" });
      } else {
        res.status(400).json({ message: "Error logging in" });
      }
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

module.exports.registerUser = registerUser;
module.exports.login = login;
