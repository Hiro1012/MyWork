/**
 * Created by Hiro on 16/7/4.
 */

var http = require("http");

http.createServer(function (request, response) {
    response.end("<h1>Hello NodeJS</h1>");
}).listen(8000);