const express = require("express");
const verifyToken = require("../middleware/verifyToken");
const forumRouter = express.Router();

const forumController = require("../controller/forumController.js");

forumRouter.get("/forum", verifyToken, forumController.getAllForum);

forumRouter.get("/forum/:id", verifyToken, forumController.getForumById);

forumRouter.post("/forum", verifyToken, forumController.addForum);

forumRouter.patch("/forum/:id", verifyToken, forumController.updateForum);

forumRouter.delete("/forum/:id", verifyToken, forumController.deleteForum);

module.exports = forumRouter;