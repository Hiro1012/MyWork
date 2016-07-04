/**
 * Created by Hiro on 16/6/30.
 */

window.Hiro = window.Hiro || {};

(function () {

    /**
     *
     * @param canvas {HTMLCanvasElement}
     * @constructor
     */

    function CenterCircle(canvas) {
        this._canvas = canvas;

        this._x = Hiro.Config.CANVAS_WIDTH / 2;
        this._y = Hiro.Config.CANVAS_HEIGHT / 2;
        this._r = 150;
    }

    /**
     *
     * @param context2d {CanvasRenderingContext2D}
     */
    CenterCircle.prototype.draw = function (context2d) {
        context2d.arc(this._x, this._y, this._r, 0, Math.PI * 2);
    };

    Object.defineProperties(CenterCircle.prototype, {
        x: {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this._x = value;
            }
        },
        y: {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this._y = value;
            }
        },
        onCircleDragEnd: {
            get: function () {
                return this._onCircleDragEnd;
            },
            set: function (value) {
                this._onCircleDragEnd = value;
            }
        },
        r: {
            get: function () {
                return this._r;
            }
        }
    });

    CenterCircle.prototype.hitTestPoint = function (pointX, pointY) {
        var distanceX = pointX - this.x;
        var distanceY = pointY - this.y;

        var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance <= this._r;
    };

    CenterCircle.prototype.startDrag = function (currentMouseX, currentMouseY) {
        this.offsetX = this.x - currentMouseX;
        this.offsetY = this.y - currentMouseY;

        this._canvas.onmousemove = function (e) {
            this.x = e.layerX + this.offsetX;
            this.y = e.layerY + this.offsetY;

            if (this.x < this._r) {
                this.x = this._r;
            } else if (this.x > Hiro.Config.CANVAS_WIDTH - this._r) {
                this.x = Hiro.Config.CANVAS_WIDTH - this._r;
            }
            if (this.y < this._r) {
                this.y = this._r;
            } else if (this.y > Hiro.Config.CANVAS_HEIGHT - this._r) {
                this.y = Hiro.Config.CANVAS_HEIGHT - this._r;
            }
        }.bind(this);

        document.onmouseup = function () {
            this._canvas.onmousemove = null;

            if (this.onCircleDragEnd) {
                this.onCircleDragEnd();
            }

            document.onmouseup = null;
        }.bind(this);
    };

    Hiro.CenterCircle = CenterCircle;

})();