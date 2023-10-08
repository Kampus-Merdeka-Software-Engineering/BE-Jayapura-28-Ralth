const express = require("express");
const articleRouter = express.Router();

const articleController = require("../controller/artikelController.js");

articleRouter.get("/article", articleController.getAllArticle);

articleRouter.get("/article/:id", articleController.getArticleById);

articleRouter.post("/article", articleController.addArticle);

articleRouter.patch("/article/:id", articleController.updateArticle);

articleRouter.delete("/article/:id", articleController.deleteArticle);

module.exports = articleRouter;
