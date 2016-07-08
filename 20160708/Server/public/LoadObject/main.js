/**
 * Created by Hiro on 16/7/8.
 */

(function () {

    // $.get("http://localhost:3000/json").done(function (data) {
    //     console.log(data);
    // });

    $.ajax("http://localhost:3000/json", {dataType: "jsonp"}).done(function (data) {
        console.log(data);
    });

})();