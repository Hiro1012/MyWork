/**
 * Created by Hiro on 16/7/10.
 */

(function () {

    $(document).one("pagecreate", ".demo-page", function () {
        function navnext(next) {
            $(":mobile-pagecontainer").pagecontainer("change", "#" + next, {
                transition: "slide"
            });
        }

        function navprev(prev) {
            $(":mobile-pagecontainer").pagecontainer("change", "#" + prev, {
                transition: "slide",
                reverse: true
            });
        }
        
        $(document).on("swipeleft", ".ui-page", function (event) {
            var next = $(this).jqmData("next");
            if (next && ( event.target === $(this)[0] )) {
                navnext(next);
            }
        });

        $(document).on("swiperight", ".ui-page", function (event) {
            var prev = $(this).jqmData("prev");
            if (prev && ( event.target === $(this)[0] )) {
                navprev(prev);
            }
        });
    });
    
})();