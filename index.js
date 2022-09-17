// import express from npm
const express = require('express');

// import body-parse
const bodyparser = require('body-parser');

const route = require('./src/routes');

// import cors
const cors = require('cors');

// make an instance of express
const app = express();
// use milddleware of cors
app.use(cors()); // it will resloved the issue for retric APIs

//use of body-parser for url encoded
app.use(bodyparser.urlencoded({ extended: false}));
app.use(bodyparser.json());

app.use('/',route);

//craete a server
// we habe to define port for server
app.listen(9000, () => {
    console.log('server is running ')}
)

