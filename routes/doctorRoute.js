const express = require("express");
const doctorRouter = express.Router();

const doctorController = require("../controller/doctorController.js");

doctorRouter.get("/doctor", doctorController.getAllDoctor);

doctorRouter.get("/doctor/:id", doctorController.getDoctorById);

doctorRouter.post("/doctor", doctorController.addDoctor);

doctorRouter.patch("/doctor/:id", doctorController.updateDoctor);

doctorRouter.delete("/doctor/:id", doctorController.deleteDoctor);

module.exports = doctorRouter;
