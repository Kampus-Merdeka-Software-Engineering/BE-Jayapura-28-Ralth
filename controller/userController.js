const userRepo = require("../repository/userRepository");
const jwt = require("jsonwebtoken"); // Import modul jwt

async function getAllUser(req, res) {
    try {
        const users = await userRepo.getAllUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getUserById(req, res) {
    try {
        const { id } = req.params;
        const user = await userRepo.getUserById(id);

        if (user.length > 0) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: `User with id ${id} not found!` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function addUser(req, res) {
    try {
        const { email, password, fullname } = req.body;
        if (!email || !password || !fullname) {
            res.status(400).json({ message: "EMPTY FIELD" });
        } else {
            await userRepo.addUser(req.body);
            res.status(201).json({ message: "Success Register" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function login(req, res) {
    try {
        const user = await userRepo.validateLogin(req.body);

        if (user) {
            const { token, user: userData } = user;
            res.status(200).json({
                message: "Login Success",
                data: {
                    token,
                    user: userData,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        } else {
            res
                .status(400)
                .json({ message: "Login failed, email or password incorrect" });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
}

async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const isSuccess = await userRepo.deleteUser(id);

        if (isSuccess) {
            res
                .status(200)
                .json({ message: `User with id ${id} has successfully deleted` });
        } else {
            res
                .status(400)
                .json({ message: `User with id ${id} has failed deleted` });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

function logout(req, res) {
    // Hapus token dari localStorage (Contoh jika Anda menggunakan localStorage)
    localStorage.removeItem("token");

    // Setelah token berhasil dihapus, kembalikan respons yang sesuai
    res.status(200).json({ message: "Logout successful" });
}

module.exports = {
    getAllUser,
    getUserById,
    addUser,
    deleteUser,
    login,
    logout,
};