const express = require("express");
const spesialisRouter = express.Router();

const spesialisController = require("../controller/spesialisController.js");

spesialisRouter.get("/spesialis", spesialisController.getAllSpesialis);

spesialisRouter.get("/spesialis/:id", spesialisController.getSpesialisById);

spesialisRouter.post("/spesialis", spesialisController.addSpesialis);

spesialisRouter.patch("/spesialis/:id", spesialisController.updateSpesialis);

spesialisRouter.delete("/spesialis/:id", spesialisController.deleteSpesialis);

module.exports = spesialisRouter;
