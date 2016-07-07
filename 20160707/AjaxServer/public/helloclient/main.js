/**
 * Created by Hiro on 16/7/7.
 */

(function () {

    var form, nameInput, SERVER_URL = "/helloserver";
    var resultField;

    function init() {
        nameInput = $("#nameinput");
        resultField = $("#resultfield");

        form = $("#form");
        form.on("submit", function (event) {
            event.preventDefault();

            resultField.html("Loading...");
            $.get(SERVER_URL, {name: nameInput.val()}, function (data) {
                resultField.html(data);
            });
        });
    }

    init();
})();