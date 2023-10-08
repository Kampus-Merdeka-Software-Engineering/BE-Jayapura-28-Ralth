const db = require("../config/db_connect.js");
const sequelize = require("sequelize");
const bcrypt = require("bcrypt");

const { DataTypes } = sequelize;

// const generateHashPassword = (password) => {
//   const salt = bcrypt.genSaltSync(10, "a");
//   return bcrypt.hashSync(password, salt);
// };

const User = db.define(
    "user", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        email: {
            type: DataTypes.STRING,
            // unique: true,
            allowNull: false,
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
        // hooks: {
        //   beforeCreate: (user) => {
        //     user.password = generateHashPassword(user.password);
        //   },
        //   beforeUpdate: async (user) => {
        //     user.password = generateHashPassword(user.password);
        //   },
        // },
        // instanceMethods: {
        //   validPassword: (password) => {
        //     return bcrypt.compareSync(password, this.password);
        //   },
        // },
    }
);

User.sync({ alter: true });
(async() => await db.sync())();

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = User;