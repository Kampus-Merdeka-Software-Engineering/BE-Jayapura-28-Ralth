const express = require("express");
const userRouter = express.Router();

const userController = require("../controller/userController.js");

userRouter.get("/user", userController.getAllUser);

userRouter.get("/user/:id", userController.getUserById);

userRouter.post("/register", userController.addUser);
userRouter.delete("/user/:id", userController.deleteUser);
userRouter.post("/login", userController.login);
userRouter.post("/logout", userController.logout);

module.exports = userRouter;