/**
 * Created by Hiro on 16/7/8.
 */

(function () {

    window.helloCallback = function (result) {
        console.log(result);
    };

    var script = document.createElement("script");
    script.src = "http://localhost:3000/hello?callback=helloCallback";
    document.body.appendChild(script);

})();