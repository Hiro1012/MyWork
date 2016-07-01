/**
 * Created by Hiro on 16/6/29.
 */

(function () {

    function Main() {

        this._video = document.getElementById("video");
        this._btnSavePhoto = document.getElementById("btnsavephoto");
        this._canvas = document.createElement("canvas");
        this._canvas.width = 1000;
        this._canvas.height = 1000;
        this._context2d = this._canvas.getContext("2d");

        this.showCamera();
        this.addListeners();
        this.render();
    }

    Main.prototype.showCamera = function () {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.getUserMedia({video: true}, function (stream) {

            var url = URL.createObjectURL(stream);
            this._video.src = url;
            this._video.play();

        }.bind(this), function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
    };

    Main.prototype.addListeners = function () {
        this._btnSavePhoto.onclick = function () {
            var url = this._canvas.toDataURL();

            var a = document.createElement("a");
            a.href = url;
            a.target = "_blank";
            a.innerHTML = "下载图片";
            document.body.appendChild(a);
        }.bind(this);
    };

    Main.prototype.render = function () {

        this._context2d.drawImage(this._video, 0, 0);

        requestAnimationFrame(this.render.bind(this));
    };

    new Main();
})();   