const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Shape of User document.
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

// Create model of the user schema
module.exports = mongoose.model("User", userSchema);
