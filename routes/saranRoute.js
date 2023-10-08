const express = require("express");
const saranRouter = express.Router();

const saranController = require("../controller/saranController.js");

saranRouter.get("/saran", saranController.getAllSaran);

saranRouter.get("/saran/:id", saranController.getSaranById);

saranRouter.post("/submit", saranController.addSaran);

saranRouter.patch("/saran/:id", saranController.updateSaran);

saranRouter.delete("/saran/:id", saranController.deleteSaran);

module.exports = saranRouter;