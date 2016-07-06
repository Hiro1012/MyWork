/**
 * Created by Hiro on 16/7/6.
 */

(function () {

    function init() {
        $("#rect").click(function () {
            
            $(this).animate({width: 0}, 1000, function () {
                $(this).hide();
            });
        });
    }

    init();
})();