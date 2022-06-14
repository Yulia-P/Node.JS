const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log(req.query)
  res.send(req.query)
})

app.listen(8080)

//http://localhost:8080/?name=jjjj&age=35