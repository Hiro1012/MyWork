/**
 * Created by Hiro on 16/7/7.
 */

(function () {
    var xhr, form, result;

    function addListeners() {
        form.onsubmit = function (event) {
            event.preventDefault();

            connectServer({name: form["name"].value});
        }
    }

    function connectServer(data) {
        xhr.onload = function () {
            result.innerHTML = xhr.responseText;
        };

        var paramsStr = "";
        for (var key in data) {
            paramsStr += key + "=" + data[key] + "&";
        }

        //GET method
        xhr.open("get", "/helloserver?" + paramsStr);
        xhr.send();

        //POST method
        // xhr.open("post", "/helloserver");
        // xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        // xhr.send(paramsStr);
    }

    function getElements() {
        form = document.getElementById("form");
        result = document.getElementById("result");
    }

    function init() {
        xhr = new XMLHttpRequest();

        getElements();
        addListeners();

        // xhr.onload = function () {
        //     console.log(xhr.responseText);
        // };
        // xhr.open("get", "data.txt");
        // xhr.send();
    }

    init();
})();