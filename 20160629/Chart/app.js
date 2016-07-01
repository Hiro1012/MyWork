/**
 * Created by Hiro on 16/6/29.
 */

(function () {

    function Main() {
        this._context2d = document.getElementById("canvas").getContext("2d");
        this._data = [21, 24, 6, 32, 34, 52, 12, 45, 67, 13, 73, 23];
        this._MAX_VALUE = 100;

        this.drawData();
    }

    Main.prototype.drawData = function () {
        var p = this.getPositionByIndex;
        this._context2d.moveTo(p.x, p.y);

        for (var i = 1; i < this._data.length; i++) {
            p = this.getPositionByIndex(i);
            this._context2d.lineTo(p.x, p.y);
        }
        this._context2d.stroke();

        this.drawRect(this.getPositionByIndex)
    };

    Main.prototype.getPositionByIndex = function (index) {
        var y = 400 * (1 - this._data[index] / this._MAX_VALUE);
        var x = (400 / 12) * index + 20;
        return {x: x, y: y};
    };

    new Main();

})();