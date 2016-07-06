/**
 * Created by Hiro on 16/7/6.
 */

(function () {

    function init() {
        // $("div").html("Hello World");
        // console.log($("div").html());

        $("#mydiv").html("Hello World");

        // $("div").click({name: "Hiro", age: 27}, function (event) {
        //     console.log(event);
        //
        //     $(this).off("click");
        // });
        // $("div").bind("click", {name: "Hiro", age: 27}, function (event) {
        //     console.log(event);
        //
        //     $(this).unbind("click");
        // });

        $("div").on("click", {name: "Hiro", age: 27}, function (event) {
            console.log(event);

            $(this).off("click");
        });
    }

    init();
})();