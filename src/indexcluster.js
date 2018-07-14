const cluster = require('cluster');

// Cluster.isMaster is true for Cluster manager but false for
// worker instance

// Is the file being executed in master mode ?
if (cluster.isMaster) {
    // Cause index.js to be executed *again* but
    // in child mode
    cluster.fork();   // new child instance is started
    // Every time when when we call cluster.fork()
    // cluster.isMaster will be set to false

    // Lets fork additional children's by running
    cluster.fork();   // new child instance is started
    cluster.fork();   // new child instance is started
    cluster.fork();   // new child instance is started
    // Every time isMaster is set to false so we will start up 4 child instances

} else {
    // I am a child, Im going to act like a server
    // and do nothing else

    // Express Server !!
    const express = require('express');
    const app = express();
    const portNo = 4000;

    // The purpose of this function is to use as much CPU
    // power as possible for set amount of duration.
    function doWork(duration) {
        const start = Date.now();
        while ((Date.now() - start) < duration) {

        }
    };

    app.get('/', (rq, res) => {
        doWork(5000); // Do work for 5000 MS
        // Note for these 5 sec our event loop can't do
        // anything else !!
        res.send('Hi  there ')
    });

    app.get('/fast',(req,res)=> {
        res.send('This was fast!')
    });

    app.listen(portNo, () => {
        console.log(`Your Server is running on port ${portNo}`)
    });
}