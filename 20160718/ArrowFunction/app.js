/**
 * Created by Hiro on 16/7/22.
 */
"use strict";
var Main = (function () {
    function Main() {
        this.index = 0;
    }
    Main.prototype.startTimer = function () {
        var _this = this;
        setInterval(function () {
            console.log(_this.index++);
        }, 1000);
        // setInterval(function () {
        //     console.log(this);
        //     console.log(this.index++);
        // }, 1000);
    };
    return Main;
}());
var m = new Main();
m.startTimer();
//# sourceMappingURL=app.js.map