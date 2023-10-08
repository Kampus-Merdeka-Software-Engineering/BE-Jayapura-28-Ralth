const db = require("../config/db_connect");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Forum = db.define(
  "forum",
  {
    forum_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "anonym",
    },

    pesan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },

  {
    freezeTableName: true,
    timestamps: true,
  }
);

// (async () => await db.sync({ alter: true }))();
Forum.sync({ alter: true })
  .then(function (data) {
    console.log("Table and model synced succcesfully");
  })
  .catch(function (err) {
    console.log("Error syncing table and model!");
  });
module.exports = Forum;
