const db = require("../config/db_connect");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Saran = db.define(
    "saran", {
        saran_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        nama: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        saran: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },

    {
        freezeTableName: true,
        timestamps: false,
    }
);

(async() => await db.sync({ alter: true }))();

module.exports = Saran;