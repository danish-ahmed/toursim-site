import express from "express";
import userController from "./user.controllers";
import User from "./user.model";

var Route = express.Router();

Route.post("/login", userController.findUser);
Route.post("/signup", userController.createUser);
Route.get("/check-email", (req, res) => {
  User.findOne({ email: req.query.email })
    .then(result => {
      if (result) {
        return res.json({ isUnique: false });
      } else {
        return res.json({ isUnique: true });
      }
    })
    .catch(err =>
      res.json({ errors: { global: "cannot connect to database" } })
    );
});

// Route.get("/verify", (req, res) => {
//   const client = require("twilio")(process.env.AccountSid, process.env.AuthToken);
//   client.messages
//     .create({
//       to: "+",
//       from: "+",
//       body: "Tomorrow's forecast in Financial District, San Francisco is Clear",
//       mediaUrl: "https://climacons.herokuapp.com/clear.png"
//     })
//     .then(message => console.log(message.sid));
// });

module.exports = Route;
