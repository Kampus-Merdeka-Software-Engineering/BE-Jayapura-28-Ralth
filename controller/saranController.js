const saranRepo = require("../repository/saranRepository.js");

async function getAllSaran(req, res) {
    try {
        const sarans = await saranRepo.getAllSaran();
        res.status(200).json(sarans);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getSaranById(req, res) {
    try {
        const { id } = req.params;
        const saran = await saranRepo.getSaranById(id);

        if (!saran) {
            res.status(404).json({ message: `Saran with id ${id} not found!` });
        } else {
            res.status(200).json(saran);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function addSaran(req, res) {
    try {
        // const {name}
        const { dataValues } = await saranRepo.addSaran(req.body);

        res.status(201).json(dataValues);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateSaran(req, res) {
    try {
        const { id } = req.params;
        const [isSuccess] = await saranRepo.editSaran(id, req.body);

        if (isSuccess) {
            res
                .status(200)
                .json({ message: `Saran with id ${id} has successfully updated` });
        } else {
            res
                .status(400)
                .json({ message: `Saran with id ${id} has failed updated` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function deleteSaran(req, res) {
    try {
        const { id } = req.params;
        const isSuccess = await saranRepo.deleteSaran(id);

        if (isSuccess) {
            res
                .status(200)
                .json({ message: `Saran with id ${id} has successfully deleted` });
        } else {
            res
                .status(400)
                .json({ message: `Saran with id ${id} has failed deleted` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAllSaran,
    getSaranById,
    addSaran,
    updateSaran,
    deleteSaran,
};