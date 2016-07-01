/**
 * Created by Hiro on 16/6/30.
 */

(function () {

    function Main() {
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        this._img = new Image();
        this._img.onload = function () {
            this.drawPhoto(this._img);
        }.bind(this);
        this._img.src = "photo.jpg";

        this.addArc();
        this.render();
        this.addListeners();
    }

    Main.prototype.addArc = function () {
        this._arc = new Hiro.Arc(50);
        this._arc.x = 100;
        this._arc.y = 100;
        this._arc.color = "#dddd00";
    };

    Main.prototype.addListeners = function () {
        this._canvas.onmousedown = function (e) {
            if (this._arc.hitTestPoint(e.layerX, e.layerY)) {
                this._arcOffsetX = this._arc.x - e.layerX;
                this._arcOffsetY = this._arc.y - e.layerY;

                this._canvas.onmousemove = function (event) {
                    this._arc.x = event.layerX + this._arcOffsetX;
                    this._arc.y = event.layerY + this._arcOffsetY;
                    if (this._arc.x < this._arc.radius) {
                        this._arc.x = this._arc.radius;
                    } else if (this._arc.x > (this._img.width - this._arc.radius)) {
                        this._arc.x = (this._img.width - this._arc.radius);
                    }
                    if (this._arc.y < this._arc.radius) {
                        this._arc.y = this._arc.radius;
                    } else if (this._arc.y > (this._img.height - this._arc.radius)) {
                        this._arc.y = (this._img.height - this._arc.radius);
                    }
                }.bind(this);
            }
        }.bind(this);

        window.onmouseup = function () {
            this._canvas.onmousemove = null;
        }.bind(this);
    };

    Main.prototype.render = function () {

        this._context2d.clearRect(0, 0, this._canvas.width, this._canvas.height);

        this.drawPhoto(this._img);

        requestAnimationFrame(this.render.bind(this));
    };

    Main.prototype.drawPhoto = function (img) {

        var g = this._context2d;

        g.drawImage(img, 0, 0);

        g.save();
        g.fillStyle = "#ffffff";
        g.globalAlpha = 0.6;
        g.beginPath();
        g.rect(0, 0, img.width, img.height);
        this._arc.draw(g);
        g.closePath();
        g.fill("evenodd");
        g.restore();
    };

    new Main();
})();