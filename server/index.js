const express = require("express");
const app = express();
const db = require("./models");
const PORT = 3000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR:${err}`);
  } else {
    // db.sequelize.sync({
    // 	alter: true,
    // });
    console.log(`APP RUNNING at ${PORT} ✅`);
  }
});
