let Sequelize = require("sequelize");
module.exports = (sequelize) => sequelize.define("specialty", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    specialty: {
        type: Sequelize.STRING,
        allowNull: true
    }
});