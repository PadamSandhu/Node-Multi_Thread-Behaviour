// process.env.UV_THREADPOOL_SIZE = 4;
// Play around with threadpool for better understanding

const https = require("https");
const crypto = require('crypto');
const fs = require('fs');

const start = Date.now();

function doRequest() {
https.request("https://www.google.ca", res => {
    res.on('data', () => {});
    res.on('end', () => {
        console.log("Sent Request",Date.now() - start);
    });
})
.end()
}


function doHash() {
    crypto.pbkdf2('a','b', 100000, 512 ,'sha512', () => {
        console.log("Hash:", (Date.now()-start))
    });
}

doRequest();

fs.readFile('multitask.js','utf8', () => {
    console.log('FS', Date.now() - start);
});

doHash();
doHash();
doHash();
doHash();


// ---------     Comments    ---------
/**
|--------------------------------------------------
 1: When we run this file, we are going to make request to google!!
 2: Than going to attempt to read all the contents in multitask.js file.
 3: Than going to calculate 4 Hashes.

        So Million dollar question is in what order your are going to see
        these console.log are going to display  ??

Answer:

Sent Request 861
Hash: 1918
FS 1919
Hash: 1920
Hash: 1929
Hash: 1931


Additional Questions ?

Why is it taking 2 seconds for our computer to read file almost 2 seconds ?

    Note: Without hash functions it's taking the following times:
            FS 21
            Sent Request 201

Why Http Request complete first ?
    Note: Http and FS are both Async calls
Why HTTP request always finish first ?

Why FS always finishes after first Hash ?


|--------------------------------------------------
*/
