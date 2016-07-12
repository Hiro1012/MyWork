/**
 * Created by Hiro on 16/7/12.
 */

(function () {
    var imageUrls = [];
    var container;
    var COL_COUNT = 3;
    var COL_WIDTH = 200;
    var cols = [];
    var imageIndex = 0;

    function initImageUrls() {
        for (var i = 0; i < 20; i++) {
            imageUrls.push("img1.png", "img2.png", "img3.png");
        }
    }

    function findElements() {
        container = document.getElementById("container");
        container.style.width = "700px";
    }

    function addCols() {
        for (var i = 0; i < COL_COUNT; i++) {
            var div = document.createElement("div");
            div.style.width = COL_WIDTH + "px";
            div.style.float = "left";
            div.style.margin = "5px 5px";
            container.appendChild(div);
            cols.push(div);
        }
    }

    function addImage() {
        var img = document.createElement("img");
        img.onload = function () {
            getMinHeightCol().appendChild(img);

            imageIndex++;
            if (imageIndex < imageUrls.length) {
                addImage();
            }
        };
        img.width = COL_WIDTH;
        img.src = imageUrls[imageIndex];
    }

    function getMinHeightCol() {
        var min = cols[0];

        for (var i = 0; i < cols.length; i++) {
            if (cols[i].clientHeight < min.clientHeight) {
                min = cols[i];
            }
        }

        return min;
    }

    function init() {
        initImageUrls();
        findElements();
        addCols();
        addImage();
    }

    init();

})();