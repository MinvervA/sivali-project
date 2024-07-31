const express = require("express");
const Router = express.Router();
const {verify} = require("./../lib/jwt");

const { userController } = require("../controllers");

Router.post("/login", userController.userLogin);
Router.get("/allUser", userController.getAllUser);
Router.post("/register", userController.userRegister);
Router.patch("/change-password", verify, userController.changePassword);

module.exports = Router;
