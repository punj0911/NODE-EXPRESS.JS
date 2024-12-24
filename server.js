var http = require('http')

http.createServer((req, res) => {
    res.end("<h1>HELLO WORLD </h1>")
}).listen(4000);

console.log(`Server is running at http://127.0.0.1:4000`)