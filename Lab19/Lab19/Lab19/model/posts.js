let Sequelize = require("sequelize");
module.exports = (sequelize) => sequelize.define("posts", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    post: {
        type: Sequelize.STRING,
        allowNull: true
    }
});