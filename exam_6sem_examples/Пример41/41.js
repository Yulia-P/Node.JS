const express = require('express')
const cookiesecret = '1234567890';
session = require('express-session')({
    resave: false,
    saveUninitialized: false,
    secret: cookiesecret,
});
app = express()


app.use(session);

app.get('/', (req, res, next) => {
    if(!isFinite(req.session.mysesval)) req.session.mysesval =0;
    else req.session.mysesval++;
   console.log('mysesval = ', req.session.mysesval);
   res.send(`mysesval = ${req.session.mysesval}`);
});

app.listen(3000, () => {
  console.log('Start server, port: ', 3000)});