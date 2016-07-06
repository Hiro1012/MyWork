/**
 * Created by Hiro on 16/7/4.
 */

var http = require("http");
var fs = require("fs");


http.createServer(function (request, response) {

    if (request.url == "/index.html") {
        response.end(fs.readFileSync("index.html"));

    } else if (request.url.match(/\/server/)) {
        var pKv = /(\?|\&)([^=]+)=([^&]+)/g;
        var params = {};
        while (true) {
            var result = pKv.exec(request.url);
            if (result) {
                params[result[2]] = result[3];
            } else {
                break;
            }
        }
        var add = parseInt(params["number1"]) + parseInt(params["number2"]);

        response.end("<h1>" + add + "</h1>");
    } else {
        response.end("<h1>404</h1>");
    }
}).listen(8001);