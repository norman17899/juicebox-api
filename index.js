const PORT = 3000;
const express = require('express');
const { nextTick } = require('process');
const server = express();

server.listen(PORT, () => {
    console.log('The server is up on port', PORT)
});

server.use((req, res, next) => {
    console.log("<___Body Logger START___>");
    console.log(req.body);
    console.log("___Body Logger END___");

    next();
})