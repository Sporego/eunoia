const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = process.env.PORT || 5000;

const app = express();

//Middleware Block
app.use(bodyParser.urlencoded({ extended: false })); // https://www.npmjs.com/package/body-parser#extended
app.use(bodyParser.json()); //https://www.npmjs.com/package/body-parser#bodyparserjsonoptions

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

//Database Block
mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true }); //Connect to test
const db = mongoose.connection;
db.on("error", () => console.log("Database Connection: Error"));
db.once("open", () => console.log("Database Connection: Success"));

app.listen(port, () => console.log(`Listening on port ${port}`));
