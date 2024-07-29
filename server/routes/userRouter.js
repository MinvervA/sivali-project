const express = require("express");
const Router = express.Router();

const { userController } = require("../controllers");

Router.post("/login", userController.userLogin);
Router.get("/allUser", userController.getAllUser);

module.exports = Router;
