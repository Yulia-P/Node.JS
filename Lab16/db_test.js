const Repository = require("./repository");
const db = new Repository();

db.getAll("FACULTY").then((response) => {
  console.log(response);
});
