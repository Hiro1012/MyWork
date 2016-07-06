/**
 * Created by Hiro on 16/7/6.
 */

(function () {

    var btnAddClass, div;

    function init() {
        btnAddClass = $("#btnaddclass");
        div = $("#div");

        btnAddClass.click(function (event) {
            div.addClass("rect");
            // div.toggleClass("rect");
        });

        div.click(function (event) {
            $(this).removeClass("rect");
        });
    }

    init();
})();