require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./models");
const PORT = 4000;
const cors = require("cors");
const Sequelize = require("sequelize");
const config = require('./config/config.js');
const env = process.env.NODE_ENV || 'development';

app.use(cors());

console.log("Environment Variables:", {
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT,
});
// Konfigurasi database
const sequelize = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  {
    host: config[env].host,
    port: config[env].port, // Gunakan port dari konfigurasi
    dialect: config[env].dialect,
    timezone: config[env].timezone
  }
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/city",async(req,res)=>{
  try {
    const cities = await db.city.findAll()

    res.send(cities)
  } catch (error) {
    res.send(error)
  }
})

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
