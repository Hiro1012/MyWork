/**
 * Created by Hiro on 16/6/27.
 */

(function () {

    function init() {

        var url = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=Java&rsv_pq=be8a002a0025967c&rsv_t=25e7bxH%2B%2BCsFBTGwoMxp7o4kdahT6Eeh7UpYJaNRWXmAWKjwAuoxiDuzLLM&rqlang=cn&rsv_enter=1&rsv_sug3=5&rsv_sug1=4&rsv_sug7=100&rsv_sug2=0&inputT=1307&rsv_sug4=2525";

        var pKv = /(\?|\&)([^=]+)=([^&]+)/g;

        while (true) {
            var result = pKv.exec(url);

            if (result) {
                console.log(result);
            } else {
                break;
            }
        }
    }

    init();
})();