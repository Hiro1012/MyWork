/**
 * Created by Hiro on 16/7/20.
 */

"use strict";

var net = require("net");
const Connection = require("./Connection");

var server = net.createServer((socket)=> {
    // socket.write("Hello Client\n");
    //
    // socket.on("data", (data)=> {
    //     console.log(String(data));
    // });

    new Connection(socket);
});

server.on("error", function () {
    console.log(arguments);
});

server.listen("8888");
console.log("Server started at port 8888");