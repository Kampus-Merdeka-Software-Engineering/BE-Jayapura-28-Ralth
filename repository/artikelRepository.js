const Article = require("../models/artikelModels.js");

async function getAllArticle() {
  const articles = await Article.findAll();
  return articles;
}

async function getArticleById(id) {
  const article = await Article.findOne({
    where: {
      artikel_id: id,
    },
  });

  return article;
}

async function addArticle(data) {
  const article = await Article.create(data);

  return article;
}

async function editArticle(id, data) {
  const article = await Article.update(data, {
    where: {
      artikel_id: id,
    },
  });

  return article;
}

async function deleteArticle(id) {
  const article = await Article.destroy({
    where: {
      artikel_id: id,
    },
  });

  return article;
}

module.exports = {
  getAllArticle,
  getArticleById,
  addArticle,
  editArticle,
  deleteArticle,
};
