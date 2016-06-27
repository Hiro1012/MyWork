/**
 * Created by Hiro on 16/6/27.
 */


(function () {

    function init() {
        var str = "Hello World";

        var p = /[a-f]/g;

        while (true) {
            var result = p.exec(str);

            if (result) {
                console.log(result);
            } else {
                break;
            }
        }
    }

    init();
})();