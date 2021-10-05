var http = require('http');

var data = "data to send to client";

var server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write(data); // You Can Call Response.write Infinite Times BEFORE response.end
    response.end("Hello World\n");
}).listen(8125);