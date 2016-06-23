/**
 * Created by Hiro on 16/6/23.
 */


window.Hiro = window.Hiro || {};

(function () {

    function Eyeball() {
        this._node = document.createElement("div");
        this._node.className = "eyeball";

        this._LEFT = 15;
        this._TOP = 15;
        this._R = 14;

        this.left = this._LEFT;
        this.top = this._TOP;

        this.addListeners();

    }

    Object.defineProperties(Eyeball.prototype, {
        node: {
            get: function () {
                return this._node;
            }
        },
        left: {
            get: function () {
                return this._left;
            },
            set: function (value) {
                this._left = value;
                this._node.style.left = this._left + "px";
            }
        },
        top: {
            get: function () {
                return this._top;
            },
            set: function (value) {
                this._top = value;
                this._node.style.top = this._top + "px";
            }
        },
        boundingRect: {
            get: function () {
                if (!this._boundingRect) {
                    this._boundingRect = this._node.getBoundingClientRect();
                }
                return this._boundingRect;
            }
        },
        globalOriginLeft: {
            get: function () {
                if (!this._globalOriginLeft) {
                    this._globalOriginLeft = this.boundingRect.left;
                }
                return this._globalOriginLeft;
            }
        },
        globalOriginTop: {
            get: function () {
                if (!this._globalOriginTop) {
                    this._globalOriginTop = this.boundingRect.top;
                }
                return this._globalOriginTop;
            }
        }
    });

    Eyeball.prototype.addListeners = function () {
        document.addEventListener("mousemove", function (event) {
            var dx = event.pageX - this.globalOriginLeft;
            var dy = event.pageY - this.globalOriginTop;
            var angle = Math.atan(dy / dx);

            var r = dx >= 0 ? 1 : -1;
            this.left = this._LEFT + this._R * Math.cos(angle) * r;
            this.top = this._TOP + this._R * Math.sin(angle) * r;
        }.bind(this));
    };

    Hiro.Eyeball = Eyeball;
})();