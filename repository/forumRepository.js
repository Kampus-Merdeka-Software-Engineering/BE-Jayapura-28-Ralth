const Forum = require("../models/forumModels.js");

async function getAllForum() {
  const forums = await Forum.findAll();
  return forums;
}

async function getForumById(id) {
  const forum = await Forum.findOne({
    where: {
      forum_id: id,
    },
  });

  return forum;
}

async function addForum(data) {
  const forum = await Forum.create(data);

  return forum;
}

async function editForum(id, data) {
  const forum = await Forum.update(data, {
    where: {
      forum_id: id,
    },
  });

  return forum;
}

async function deleteForum(id) {
  const forum = await Forum.destroy({
    where: {
      forum_id: id,
    },
  });

  return forum;
}

module.exports = {
  getAllForum,
  getForumById,
  addForum,
  editForum,
  deleteForum,
};
