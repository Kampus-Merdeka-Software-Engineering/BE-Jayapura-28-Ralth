const connection = require("../config/db_connect.js")

const table = "rumah_sakit"

function getAllHospital() {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

function getHospitalById(id) {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM ${table} WHERE id_rs = ${id}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

function addHospital({ nama_rs, alamat }) {
    return new Promise((resolve, reject) => {
        connection.query(`INSERT INTO ${table} (nama_rs,alamat) VALUES ('${nama_rs}', '${alamat}')`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}

function deleteHospitalById(id_rs) {
    return new Promise((resolve, reject) => {
        connection.query(`DELETE * FROM ${table} WHERE id_rs = ${id_rs}`, (err, result) => {
            if (err) reject(err);
            resolve(result)
        })
    })
}


module.exports = {
    getAllHospital,
    getHospitalById,
    addHospital,
    deleteHospitalById
}