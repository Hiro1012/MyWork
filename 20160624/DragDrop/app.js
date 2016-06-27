/**
 * Created by Hiro on 16/6/24.
 */


(function () {

    var p, targetContainer, currentDragged;

    function getElements() {
        p = document.getElementById("p");
        targetContainer = document.getElementById("target-container");
    }

    // function implement1() {
    //     getElements();
    //
    //     p.ondragstart = function (event) {
    //         currentDragged = p;
    //     };
    //     targetContainer.ondragover = function (event) {
    //         event.preventDefault();
    //     };
    //     targetContainer.ondrop = function (event) {
    //         targetContainer.appendChild(currentDragged);
    //     }
    // }
    //
    // implement1();

    function init() {
        getElements();

        p.ondragstart = function (event) {
            event.dataTransfer.setData("domId", this.id);
        };

        // console.log(document.querySelectorAll(".container"));
        // document.querySelectorAll(".container").forEach(function (item) {
        //     item.acceptDrop = true;
        // });

        var result = document.querySelectorAll(".container");
        for (var i = 0; i < result.length; i++) {
            result[i].acceptDrop = true;
        }

    }

    init();

})();