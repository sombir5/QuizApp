const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connect = require("./src/config/db");
const game = require("./src/routers/router");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/", game);

app.listen(PORT, async () => {
  await connect();
  console.log("http://localhost:8080");
});

