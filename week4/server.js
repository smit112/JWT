const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const week4 = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

week4.use(cors(corsOptions));


week4.use(bodyParser.json());

week4.use(bodyParser.urlencoded({ extended: true }));

// simple route
week4.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});
require('./week4/routes/auth.routes')(week4);
require('./week4/routes/user.routes')(week4);

const PORT = process.env.PORT || 8080;
week4.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});