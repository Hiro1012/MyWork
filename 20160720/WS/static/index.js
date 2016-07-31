/**
 * Created by Hiro on 16/7/23.
 */

var ws = new WebSocket("ws://localhost:8888");
ws.onopen = function (e) {
    console.log(e);
    ws.send("Hello Server >>>");
};