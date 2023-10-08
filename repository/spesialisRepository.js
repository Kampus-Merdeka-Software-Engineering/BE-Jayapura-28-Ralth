const Spesialis = require("../models/spesialisModel");

async function getAllSpesialis() {
  const spesialist = await Spesialis.findAll();
  return spesialist;
}

async function getSpesialisById(id) {
  const spesialis = await Spesialis.findOne({
    where: {
      sp_id: id,
    },
  });

  return spesialis;
}

async function addSpesialis(data) {
  const spesialis = await Spesialis.create(data);

  return spesialis;
}

async function editSpesialis(id, data) {
  const spesialis = await Spesialis.update(data, {
    where: {
      sp_id: id,
    },
  });

  return spesialis;
}

async function deleteSpesialis(id) {
  const spesialis = await Spesialis.destroy({
    where: {
      sp_id: id,
    },
  });

  return spesialis;
}

module.exports = {
  getAllSpesialis,
  getSpesialisById,
  addSpesialis,
  editSpesialis,
  deleteSpesialis,
};
