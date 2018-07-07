const https = require("https");

const start = Date.now();

function doRequest() {
https.request("https://www.bell.ca", res => {
    res.on('data', () => {});
    res.on('end', () => {
        console.log(Date.now() - start);
    });
})
.end()
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

// All these task completes at same time, even if default thread # is only 4.