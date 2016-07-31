/**
 * Created by Hiro on 16/7/25.
 */

var source = new EventSource("sse");

// source.onmessage=function (e) {
//     console.log(e);
// };

source.addEventListener("hello", function (e) {
    var result = JSON.parse(e.data);
    console.log(result, e);
});