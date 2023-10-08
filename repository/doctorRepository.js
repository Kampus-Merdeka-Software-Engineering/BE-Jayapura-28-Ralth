const Doctor = require("../models/dokterModels.js");

async function getAllDoctor() {
  const doctors = await Doctor.findAll();
  return doctors;
}

async function getDoctorById(id) {
  const doctor = await Doctor.findOne({
    where: {
      dokter_id: id,
    },
  });

  return doctor;
}

async function addDoctor(data) {
  const doctor = await Doctor.create(data);

  return doctor;
}

async function editDoctor(id, data) {
  const doctor = await Doctor.update(data, {
    where: {
      dokter_id: id,
    },
  });

  return doctor;
}

async function deleteDoctor(id) {
  const doctor = await Doctor.destroy({
    where: {
      dokter_id: id,
    },
  });

  return doctor;
}

module.exports = {
  getAllDoctor,
  getDoctorById,
  addDoctor,
  editDoctor,
  deleteDoctor,
};
