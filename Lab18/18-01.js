import { Model, Sequelize } from 'sequelize';
import { Faculty, initORM, Pulpit } from './entities.js';
import { HttpHandler } from './Handler.js';
import http from 'http';

const sequelize = new Sequelize({
    database: 'uni',
    username: 'root',
    password: 'Zalesse2015!',
    host: 'localhost',
    dialect: 'mysql',
});

const server = http.createServer();

server.listen(3000, 'localhost', () => console.log('Server is started'));

sequelize.authenticate()
    .then(() => console.log('Connected to DB successfully'))
    .then(() => {
        initORM(sequelize);
    })
    .then(() => {
        server.on('request', (request, response) => {
            const method = request.method;

            switch (method) {
                case 'GET':
                    HttpHandler.onGet(request, response);
                    break;
                case 'POST':
                    HttpHandler.onPost(request, response);
                    break;
                case 'PUT':
                    HttpHandler.onPut(request, response);
                    break;
                case 'DELETE':
                    HttpHandler.onDelete(request, response);
                    break;
                default:
                    HttpHandler.onError(response, 501, 'Not Implemented');
                    break;
            }
        });
    })
    .catch(err => console.log('Connection error with DB:', err));




