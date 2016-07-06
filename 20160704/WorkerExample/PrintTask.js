/**
 * Created by Hiro on 16/7/4.
 */

(function () {

    var a = 0;
    var max = 10000000000;

    for (var i = 0; i < max; i++) {
        a++;
        
        if (i % 10000000 == 0) {
            postMessage(Math.round(i / max * 100) + "%");
        }
    }
    
    postMessage("完成");
})();