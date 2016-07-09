/**
 * Created by Hiro on 16/7/9.
 */

(function () {

    var videodialog;

    function init() {
        $("#btnopenvideo").button().click(function () {
            videodialog.dialog("open");
        });

        videodialog = $("#videodialog").dialog({
            autoOpen: false,
            width: 555,
            height: 360,
            close: function () {
                var videoPlayer = $(this).find(".videoplayer");
                var vpElement = videoPlayer[0];
                vpElement.pause();
            }
        });
    }

    init();
})();