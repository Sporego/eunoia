const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

//load api routes
const users = require("./routes/api/users");
const pokemons = require("./routes/api/pokemons");

const port = process.env.PORT || 5000;

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "./client/build")));

//Middleware Block
app.use(bodyParser.urlencoded({ extended: false })); // https://www.npmjs.com/package/body-parser#extended
app.use(bodyParser.json()); //https://www.npmjs.com/package/body-parser#bodyparserjsonoptions
app.use(passport.initialize()); //Passport Middleware Intial
require("./config/passport")(passport);
app.use("/api/users", users); // route
app.use("/api/pokemon", pokemons); //route

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "Backend Connection Status: 'Good'" });
});

//Database Block
mongoose
  .connect("mongodb://localhost/test", { useNewUrlParser: true }) //Connect to test
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

const db = mongoose.connection;
db.on("error", () => console.log("Database Connection: Error"));
db.once("open", () => console.log("Database Connection: Success"));

app.listen(port, () => console.log(`Listening on port ${port}`));
