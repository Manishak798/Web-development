const http = require("http");
const request = http.get('http://www.google.com', response => {
    response.on('data', chunk => {
        console.log(chunk.toString());
    })
});
request.on('error', error => {
    console.error('error message');
});