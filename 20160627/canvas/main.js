/**
 * Created by Hiro on 16/6/27.
 */


(function () {

    function Main() {
        /**
         *
         * @type {HTMLCanvasElement}
         * @private
         */
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        // this.drawRect();
        // this.drawCircle();
        this.drawText();
    }

    Main.prototype.drawRect = function () {
        this._context2d.fillStyle = "00ff00";
        this._context2d.fillRect(10, 10, 200, 100);

        this._context2d.lineWidth = 10;
        this._context2d.strokeRect(10, 10, 200, 100);

    };
    Main.prototype.drawCircle = function () {
        this._context2d.beginPath();
        this._context2d.arc(100, 100, 50, 0, Math.PI * 2);
        this._context2d.stroke();
        this._context2d.closePath();

        this._context2d.beginPath();
        this._context2d.arc(100, 200, 50, 0, Math.PI);
        this._context2d.closePath();
        this._context2d.stroke();

        this._context2d.beginPath();
        this._context2d.moveTo(200, 100);
        this._context2d.arc(200, 100, 50, 0, Math.PI/2);
        this._context2d.closePath();
        this._context2d.stroke();
    };
    Main.prototype.drawText=function () {
        this._context2d.font="bold 32px Courier";
        this._context2d.fillStyle="#00dddd";
        this._context2d.fillText("Hello.World",0,32);
    };
    
    new Main();

})();