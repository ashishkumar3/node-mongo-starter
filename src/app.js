const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// express app
const app = express();

// middlewares
app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());

// to check what pages are requested by the users.
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next();
});

// routing middleware
// app.use(learnerRoute);

// default port
const PORT = process.env.PORT || 3000;

// set the view engine to ejs
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

// home page
app.get("/", (req, res) => {
  res.render("index");
});

// error 404 not found
app.use((req, res, next) => {
  res.status(404).render("404");
});

// error 500 internal server error
app.use((err, req, res, next) => {
  console.error(err);
  res.render("500");
});

// mongodb connection
// mongoose
//   .connect(
//     `mongodb+srv://<username>:<password>@<cluster>/<collection>?retryWrites=true&w=majority`,
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server running on port ${PORT}`);
//     });
//   })
//   .catch(err => {
//     console.log(err);
//   });
app.listen(3000, () => console.log(`Server running on port ${PORT}`));
