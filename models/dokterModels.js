const db = require("../config/db_connect");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Doctor = db.define(
  "dokter",
  {
    dokter_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nama_dokter: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    gender: {
      type: DataTypes.ENUM("Pria", "Wanita"),
      allowNull: true,
    },

    spesialis: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  }
);

// Dokter.sync({ alter: true }).then(function(data) {
//     console.log('Table and model synced succcesfully')
// }).catch(function(err) {
//     console.log('Error syncing table and model!')
// })

(async () => await db.sync())();

module.exports = Doctor;
