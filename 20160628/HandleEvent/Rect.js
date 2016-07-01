/**
 * Created by Hiro on 16/6/30.
 */

window.Hiro = window.Hiro || {};

(function () {

    function Rect(width, height) {
        this._width = width;
        this._height = height;

        this._x = 0;
        this._y = 0;
        this._regX = 0;
        this._regY = 0;
        this._color = "#00dddd";
        this._rotation = 0;
    }

    Object.defineProperties(Rect.prototype, {
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
        regX: {
            get: function () {
                return this._regX;
            },
            set: function (value) {
                this._regX = value;
            }
        },
        regY: {
            get: function () {
                return this._regY;
            },
            set: function (value) {
                this._regY = value;
            }
        },
        color: {
            get: function () {
                return this._color;
            },
            set: function (value) {
                this._color = value;
            }
        },
        width: {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._width = value;
            }
        },
        height: {
            get: function () {
                return this._height;
            },
            set: function (value) {
                this._height = value;
            }
        },
        rotation: {
            get: function () {
                return this._rotation;
            },
            set: function (value) {
                this._rotation = value;
            }
        }
    });

    Rect.prototype.draw = function (context2d) {
        context2d.save();
        context2d.fillStyle = this.color;
        context2d.translate(this.x, this.y);
        context2d.rotate(this.rotation);
        context2d.fillRect(-this.regX, -this.regY, this.width, this.height);
        context2d.restore();
    };

    Rect.prototype.hitTestPoint = function (pointX, pointY) {
        return pointX > this.x &&
            pointX < this.x + this.width &&
            pointY > this.y &&
            pointY < this.y + this.height;
    };

    Hiro.Rect = Rect;

})();