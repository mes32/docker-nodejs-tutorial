'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Setup App
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>\n');
});

app.listen(PORT, HOST);
console.log(`Server running on http://${HOST}:${PORT}`);