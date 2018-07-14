// Express Server !!

const express = require('express');
const app = express();
const portNo = 3000;

// The purpose of this function is to use as much CPU
// power as possible for set amount of duration.
function doWork(duration) {
    const start = Date.now();
    while((Date.now()- start) < duration) {

    }
};

app.get('/', (rq,res) => {
    doWork(5000);    // Do work for 5000 MS
    // Note for these 5 sec our event loop can't do
    // anything else !!
    res.send('Hi  there ')
});

app.listen(portNo);