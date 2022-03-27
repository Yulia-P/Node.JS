const dbConfig = require("./config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.config)

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.departments = require("../model/departments")(sequelize);
db.officialinf = require("../model/officialinf")(sequelize);
db.personalinf = require("../model/personalinf")(sequelize);
db.posts = require("../model/posts")(sequelize);
db.specialty = require("../model/specialty")(sequelize);

db.officialinf.belongsTo(db.personalinf);
db.officialinf.belongsTo(db.posts);
db.officialinf.belongsTo(db.specialty);
db.officialinf.belongsTo(db.departments);
module.exports = db;