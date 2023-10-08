const db = require("../config/db_connect");
const sequelize = require("sequelize");

const { DataTypes } = sequelize;

const Article = db.define(
  "artikel",
  {
    artikel_id: {
      type: sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },

    judul_artikel: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },

    konten_artikel: {
      type: sequelize.DataTypes.TEXT,
      allowNull: false,
    },

    url: {
      type: sequelize.DataTypes.TEXT,
      allowNull: false,
    },

    sumber: {
      type: sequelize.DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    freezeTableName: true,
    timestamps: true,
  }
);

(async () => await db.sync())();

module.exports = Article;
