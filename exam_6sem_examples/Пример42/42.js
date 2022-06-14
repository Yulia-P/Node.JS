const express = require("express");
const app = express();
 
app.use("/index",function (request, response) {
  response.redirect("https://www.youtube.com/")
});
 
app.listen(3000);