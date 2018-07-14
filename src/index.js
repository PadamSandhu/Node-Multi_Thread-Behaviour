// Express Server !!

const express = require('express');
const app = express();
const portNo = 3000;

app.get('/', (rq,res) => {
    res.send('Hi  there ')
});

app.listen(portNo);