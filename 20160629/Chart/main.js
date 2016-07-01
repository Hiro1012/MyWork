/**
 * Created by Hiro on 16/6/29.
 */


(function () {

    var Config = {CIRCLE_X: 200, CIRCLE_Y: 200};

    function Main() {
        this._data = [
            {name: "Android", value: 0.5, fillColor: "#ff0000"},
            {name: "iOS", value: 0.4, fillColor: "#00ff00"},
            {name: "JavaME", value: 0.06, fillColor: "#0000ff"},
            {name: "WindowsPhone", value: 0.04, fillColor: "#ffff00"}
        ];

        this._context2d = document.getElementById("canvas").getContext("2d");

        this.drawData();
    }

    Main.prototype.drawData = function () {
        var lastValue = 0;
        for (var i = 0; i < this._data.length; i++) {
            var item = this._data[i];
            var value = item.value * Math.PI * 2;
            var currentValue = lastValue + value;

            this._context2d.beginPath();
            this._context2d.moveTo(Config.CIRCLE_X, Config.CIRCLE_Y);
            this._context2d.arc(Config.CIRCLE_X, Config.CIRCLE_Y, 100, lastValue, currentValue);
            this._context2d.closePath();
            this._context2d.fillStyle = item.fillColor;
            this._context2d.fill();

            lastValue = currentValue;
        }
    };

    new Main();

})();