const express = require('express');
//const path = require('path');
const createError = require('http-errors');
const logger = require('morgan');

const bodyParser = require('body-parser');
//const jsonParser = express.json();

const departmentsRoutes = require('./routes/departments');
const officialinfRoutes = require('./routes/officialinf');
const personalinfRoutes = require('./routes/personalinf');
const postsRoutes = require('./routes/posts');
const specialtyRoutes = require('./routes/specialty');

const app = express();

app.use(bodyParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/departments', departmentsRoutes);
app.use('/officialinf', officialinfRoutes);
app.use('/personalinf', personalinfRoutes);
app.use('/posts', postsRoutes);
app.use('/specialty', specialtyRoutes);

app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');

});

const db = require("./db/models");

db.sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log(`Server is running on port ${3000}`);
    });
});