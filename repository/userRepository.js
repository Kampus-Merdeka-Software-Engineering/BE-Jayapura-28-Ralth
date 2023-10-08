const User = require("../models/userModels.js");
const jwt = require("jsonwebtoken"); // Import modul jwt

async function getAllUser() {
    const users = await User.findAll();
    return users;
}

function getUserById(id) {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT * FROM ${table} WHERE id_user = ${id}`,
            (err, result) => {
                if (err) reject(err);
                resolve(result);
            }
        );
    });
}

async function addUser(data) {
    const user = await User.create(data);
    return user;
}

async function validateLogin({ email, password }) {
    const user = await User.findOne({
        where: {
            email,
        },
    });

    if (user) {
        if (user && validPassword(user, password)) {
            // Jika login berhasil, buat token JWT
            const token = jwt.sign({ userId: user.user_id, email: user.email },
                process.env.JWT_SECRET, { expiresIn: "1h" } // Waktu kedaluwarsa token
            );

            return {
                token,
                user: {
                    fullname: user.fullname,
                    email: user.email,
                },
            };
        } else {
            return null;
        }
    }
}

function validPassword(user, password) {
    return user.password === password; // Membandingkan password dengan teks biasa
}

async function deleteUser(id) {
    const user = await User.destroy({
        where: {
            user_id: id,
        },
    });

    return user;
}

module.exports = {
    getAllUser,
    getUserById,
    addUser,
    deleteUser,
    validateLogin,
};