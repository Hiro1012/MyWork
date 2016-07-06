/**
 * Created by Hiro on 16/7/7.
 */

(function () {

    var div;

    function init() {
        div = $("#div");

        // div.css("width", "100px");
        // div.css("height", "100px");
        // div.css("backgroundColor","yellow");

        div.css({
            width: "100px",
            height: "100px",
            backgroundColor: "green"
        });
    }

    init();
})();