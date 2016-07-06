/**
 * Created by Hiro on 16/7/7.
 */

(function () {

    var form;

    function init() {
        form = $("#form");

        form.on("submit", function (event) {
            // console.log($("#blank").val());
            console.log($("#blank").attr("type"));
            event.preventDefault();
        });
        // $("#blank").val("Hello World");

        $("#blank").attr("type", "number");
    }

    init();
})();