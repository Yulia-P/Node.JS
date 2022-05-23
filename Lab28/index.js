const express = require('express')
const bodyParser = require("body-parser")
const jsonRouter = require('express-json-rpc-router')
const { validator1, validator2 } = require('./validator')
const { controller } = require('./controller')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const checks = {
    sum:  (params, _, raw) => validator1(params, _, raw),
    mul:  (params, _, raw) => validator1(params, _, raw),
    div:  (params, _, raw) => validator2(params, _, raw),
    proc: (params, _, raw) => validator2(params, _, raw)
}

app.use(jsonRouter({
    methods: controller,
    beforeMethods: checks,
    onError(err) { console.log(err) }
}))


app.listen(3000, () => console.log(`server runs on http://localhost:3000`))