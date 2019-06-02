const express = require("express");
const router = express.Router();

// models
const User = require("../../models/user");

// get user by passing name in the url
router.get("/user", (req, res) => {
  if (!req.query.name) {
    return res.status(400).send("Missing URL parameter: name");
  }
  User.find({ name: req.query.name })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// to add a new user to the db
router.post("/add-user", (req, res) => {
  if (!req.body) {
    return res.status(400).send("Request body is missing");
  }

  const user = new User(req.body);

  user
    .save()
    .then(doc => {
      if (!doc || doc.length === 0) {
        return res.status(500).send(doc);
      }
      res.status(201).send(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// PUT - update a specific user's info by passing user's email in the url.
router.put("/user", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameter: email");
  }
  User.findOneAndUpdate({ email: req.query.email }, req.body, { new: true })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// DELETE - to remove a user from the db by passing email to the url.
router.delete("/user", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing URL parameter: email");
  }
  User.findOneAndDelete({ email: req.query.email })
    .then(doc => {
      res.json(doc);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
