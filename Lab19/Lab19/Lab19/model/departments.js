let Sequelize = require("sequelize");
module.exports = (sequelize) => sequelize.define("departments", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    department: {
        type: Sequelize.STRING,
        allowNull: true
    },
    leader: {
        type: Sequelize.STRING,
        allowNull: true
    },
    phoneNum: {
        type: Sequelize.STRING,
        allowNull: true
    }
});