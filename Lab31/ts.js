const ts = require('express').Router();

let data = require('./phone') || [];

ts.get('/', (request, response) => {
    response.json(data);
});

ts.post('/', (request, response) => {
    const {id, name, phone} = request.body;
    const newTs = {id, name, phone};
    console.log(newTs)
    const targetTs = data.find(ts => ts.id === newTs.id);
    console.log(targetTs)
    if (!targetTs) {
        data.push(newTs);
        response.json(newTs);
    }
    response.status(400).end();
});

ts.put('/', (request, response) => {
    const {id, name, phone} = request.body;
    const newTs = {id, name, phone};
    const targetTs = data.find(ts => ts.id === newTs.id);
    if (id && targetTs) {
        targetTs.name = name;
        targetTs.phone = phone;
        response.json(targetTs);
    } else {
        response.status(400).end();
    }
});

ts.delete('/', (request, response) => {
    console.log(request.query.id)
    console.log(data)
    const target = data.find(ts => ts.id === +request.query.id);
    console.log(target)
    if (request.query.id && target) {
        data = data.filter((ts) => ts.id !== target.id);
        console.log(data)
        response.json(data.find(ts => ts.id === +request.query.id));
    } else {
        response.status(400).end();
    }
});


module.exports = ts;
