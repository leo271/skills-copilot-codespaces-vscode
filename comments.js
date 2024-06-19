// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be served with the correct content type.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, 'comments.html')).pipe(res);
}
);