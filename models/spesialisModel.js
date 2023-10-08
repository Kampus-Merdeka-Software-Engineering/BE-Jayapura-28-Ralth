const db = require("../config/db_connect.js");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Spesialis = db.define(
  "spesialis",
  {
    sp_id: {
      type: sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    jenis_sp: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  }
);

(async () => await db.sync())();

module.exports = Spesialis;
