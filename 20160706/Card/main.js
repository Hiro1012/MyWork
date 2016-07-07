/**
 * Created by Hiro on 16/7/7.
 */

(function () {

    function init() {
        $(".card").card({
            width: "256px", height: "362px", onclick: function (event) {
                $(this).toggleFace();
            }
        });
    }

    init();
})();