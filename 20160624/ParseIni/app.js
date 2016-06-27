/**
 * Created by Hiro on 16/6/25.
 */


(function () {

    function init() {

        $.get("config.ini").done(function (data) {
            var ini = new Hiro.Ini(data);
            console.log(ini);
        });

    }

    init();
})();