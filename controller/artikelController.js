const articleRepo = require("../repository/artikelRepository");

async function getAllArticle(req, res) {
  try {
    const articles = await articleRepo.getAllArticle();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getArticleById(req, res) {
  try {
    const { id } = req.params;
    const article = await articleRepo.getArticleById(id);

    if (!article) {
      res.status(404).json({ message: `Article with id ${id} not found!` });
    } else {
      res.status(200).json(article);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addArticle(req, res) {
  try {
    const { dataValues } = await articleRepo.addArticle(req.body);
    res.status(201).json(dataValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateArticle(req, res) {
  try {
    const { id } = req.params;
    const [isSuccess] = await articleRepo.editArticle(id, req.body);

    if (isSuccess) {
      res
        .status(200)
        .json({ message: `Article with id ${id} has successfully updated` });
    } else {
      res
        .status(400)
        .json({ message: `Article with id ${id} has failed updated` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteArticle(req, res) {
  try {
    const { id } = req.params;
    const isSuccess = await articleRepo.deleteArticle(id);

    if (isSuccess) {
      res
        .status(200)
        .json({ message: `Article with id ${id} has successfully deleted` });
    } else {
      res
        .status(400)
        .json({ message: `Article with id ${id} has failed deleted` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllArticle,
  getArticleById,
  addArticle,
  updateArticle,
  deleteArticle,
};
