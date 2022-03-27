let Sequelize = require("sequelize");
module.exports = (sequelize) => sequelize.define("officialinf", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    personalNum: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: true
    },
    idDep: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idPost: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    idSpec: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    status: {
        type: Sequelize.STRING,
        allowNull: true
    }
});