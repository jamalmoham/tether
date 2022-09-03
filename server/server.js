const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
// const jwt = require("jsonwebtoken");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
require("./config/mongoose.config");
require("./routes/highUser.routes")(app);
require("./routes/collegeUser.routes")(app);

app.listen(8000, () => {
  console.log("Listening at Port 8000");
});

