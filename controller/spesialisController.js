const spesialisRepo = require("../repository/spesialisRepository.js");

async function getAllSpesialis(req, res) {
  try {
    const spesialist = await spesialisRepo.getAllSpesialis();
    res.status(200).json(spesialist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSpesialisById(req, res) {
  try {
    const { id } = req.params;
    const spesialis = await spesialisRepo.getSpesialisById(id);

    if (!spesialis) {
      res.status(404).json({ message: `Spesialist with id ${id} not found!` });
    } else {
      res.status(200).json(saran);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addSpesialis(req, res) {
  try {
    const { dataValues } = await spesialisRepo.addSpesialis(req.body);

    res.status(201).json(dataValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateSpesialis(req, res) {
  try {
    const { id } = req.params;
    const [isSuccess] = await spesialisRepo.editSpesialis(id, req.body);

    if (isSuccess) {
      res
        .status(200)
        .json({ message: `Spesialist with id ${id} has successfully updated` });
    } else {
      res
        .status(400)
        .json({ message: `Spesialist with id ${id} has failed updated` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteSpesialis(req, res) {
  try {
    const { id } = req.params;
    const isSuccess = await spesialisRepo.deleteSpesialis(id);

    if (isSuccess) {
      res
        .status(200)
        .json({ message: `Spesialist with id ${id} has successfully deleted` });
    } else {
      res
        .status(400)
        .json({ message: `Spesialist with id ${id} has failed deleted` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllSpesialis,
  getSpesialisById,
  addSpesialis,
  updateSpesialis,
  deleteSpesialis,
};
