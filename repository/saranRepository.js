const Saran = require("../models/saranModels.js");

async function getAllSaran() {
  const sarans = await Saran.findAll();
  return sarans;
}

async function getSaranById(id) {
  const saran = await Saran.findOne({
    where: {
      saran_id: id,
    },
  });

  return saran;
}

async function addSaran(data) {
  const saran = await Saran.create(data);

  return saran;
}

async function editSaran(id, data) {
  const saran = await Saran.update(data, {
    where: {
      saran_id: id,
    },
  });

  return saran;
}

async function deleteSaran(id) {
  const saran = await Saran.destroy({
    where: {
      saran_id: id,
    },
  });

  return saran;
}

module.exports = {
  getAllSaran,
  getSaranById,
  addSaran,
  editSaran,
  deleteSaran,
};
