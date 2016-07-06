/**
 * Created by Hiro on 16/7/4.
 */

(function () {

    var btnPrint, progressContainer;

    function init() {

        progressContainer = document.getElementById("progresscontainer");

        btnPrint = document.getElementById("btnprint");
        btnPrint.onclick = function () {
            var worker = new Worker("PrintTask.js");
            worker.onmessage = function (event) {
                progressContainer.innerHTML = event.data;
            }
        };
    }

    init();
})();