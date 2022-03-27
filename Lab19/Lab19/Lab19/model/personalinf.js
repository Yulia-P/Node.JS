let Sequelize = require("sequelize");
module.exports = (sequelize) => sequelize.define("personalinf", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    
    passport: {
        type: Sequelize.STRING,
        allowNull: true
    },
    address: {
        type: Sequelize.STRING,
        allowNull: true
    },
   
    maritalStat: {
        type: Sequelize.STRING,
        allowNull: true
    },
    children: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
  
});