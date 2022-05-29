const express = require('express');
const bodyParser = require('body-parser');
const swaggerUI = require('swagger-ui-express');

const ts = require('./ts');
const swagger = require('./swagger');
const app = express();

app.use(bodyParser.json());
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swagger));
app.use('/ts', ts);

app.listen(3000, () => console.log(`Listening to http://localhost:3000/`));
