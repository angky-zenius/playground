const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Evening!');
});

app.listen(port, () => {
    console.log('Starting server on port: ' + port);
});