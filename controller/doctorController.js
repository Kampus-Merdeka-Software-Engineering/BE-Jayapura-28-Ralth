const doctorRepo = require("../repository/doctorRepository.js");

async function getAllDoctor(req, res) {
  try {
    const doctors = await doctorRepo.getAllDoctor();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getDoctorById(req, res) {
  try {
    const { id } = req.params;
    const doctor = await doctorRepo.getDoctorById(id);

    if (!doctor) {
      res.status(404).json({ message: `Doctor with id ${id} not found!` });
    } else {
      res.status(200).json(doctor);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function addDoctor(req, res) {
  try {
    // const {name}
    const { dataValues } = await doctorRepo.addDoctor(req.body);

    res.status(201).json(dataValues);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateDoctor(req, res) {
  try {
    const { id } = req.params;
    const [isSuccess] = await doctorRepo.editDoctor(id, req.body);

    if (isSuccess) {
      res
        .status(200)
        .json({ message: `Doctor with id ${id} has successfully updated` });
    } else {
      res
        .status(400)
        .json({ message: `Doctor with id ${id} has failed updated` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteDoctor(req, res) {
  try {
    const { id } = req.params;
    const isSuccess = await doctorRepo.deleteDoctor(id);

    if (isSuccess) {
      res
        .status(200)
        .json({ message: `Doctor with id ${id} has successfully deleted` });
    } else {
      res
        .status(400)
        .json({ message: `Doctor with id ${id} has failed deleted` });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllDoctor,
  getDoctorById,
  addDoctor,
  updateDoctor,
  deleteDoctor,
};
