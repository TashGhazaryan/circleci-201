const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World Finally!')
})

module.exports.handler = serverless(app);

const obj = {
    name: "Artash"
}

function test() {
    console.log('Test')
}
test();
