const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((res, req) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add") /
  postMessage((res, req) => {
    const username = req.body.username;
    const newUser = new User({
      username,
    });
    newUser.save()
    .then(()=>res.json("user added"))
    .catch((err) => res.sta)
  });
