const express = require('express');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes will go here
// ...

app.post('/api/users', function(req, res) {
    const user_id = req.body.id;
    const token = req.body.token;
    const geo = req.body.geo;
  
    res.send({
      'user_id': user_id,
      'token': token,
      'geo': geo
    });
  });
  
  app.listen(port);
  console.log('Server started at http://localhost:' + port);

  //http://localhost:8080/api/users