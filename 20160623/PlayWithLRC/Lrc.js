/**
 * Created by Hiro on 16/6/22.
 */

window.Hiro = window.Hiro || {};

(function () {

    /**
     *
     * @param lrcString{String}
     * @constructor
     */
    function Lrc(lrcString) {

        this.data = {};

        // var lines = lrcString.split("\n");
        // lines.forEach(function (line) {
        //     var startIndex = line.indexOf("[");
        //     if (startIndex != -1) {
        //         var minStr = line.substr(startIndex + 1, 2);
        //         var min = parseInt(minStr);
        //         var secStr = line.substr(startIndex + 4, 2);
        //         var sec = parseInt(secStr);
        //
        //         this.data[min * 60 + sec] = line.substr(startIndex + 10);
        //     }
        // }.bind(this));

        var p = /\[(\d{2}):(\d{2}).(\d{2})\](.*)/g;
        while (true) {
            var result = p.exec(lrcString);
            if (result) {
                this.data[parseInt(result[1]) * 60 + parseInt(result[2])] = result[4];
            }else{
                break;
            }
        }
    }

    Lrc.prototype.getContent = function (timeTag) {
        return this.data[timeTag];
    };

    Hiro.Lrc = Lrc;


})();