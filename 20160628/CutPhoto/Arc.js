/**
 * Created by Hiro on 16/6/30.
 */

window.Hiro = window.Hiro || {};

(function () {

    function Arc(radius) {
        this._radius = radius;

        this._x = 0;
        this._y = 0;
        this._regX = 0;
        this._regY = 0;
        this._color = "#00dddd";
        this._rotation = 0;
    }

    Object.defineProperties(Arc.prototype, {
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
        radius: {
            get: function () {
                return this._radius;
            },
            set: function (value) {
                this._radius = value;
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

    Arc.prototype.draw = function (context2d) {
        context2d.save();
        context2d.translate(this.x, this.y);
        context2d.rotate(this.rotation);
        context2d.arc(-this.regX, -this.regY, this.radius, 0, Math.PI * 2);
        context2d.restore();
    };

    Arc.prototype.hitTestPoint = function (pointX, pointY) {
        return Math.pow((pointX - this.x), 2) + Math.pow((pointY - this.y), 2) <= Math.pow(this.radius, 2);
    };

    Hiro.Arc = Arc;

})();