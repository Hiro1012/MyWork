/**
 * Created by Hiro on 16/6/27.
 */

(function () {

    function Main() {

        this._context2d = document.getElementById("canvas").getContext("2d");

        new Promise(function (resolve, reject) {
            var img = document.createElement("img");
            img.onload = function () {
                resolve(img);
            };
            img.onerror = reject;
            img.src = "photo.jpg";
        }).then(function (result) {
            this._context2d.drawImage(result, 0, 0);
            var imageWidth = Math.round(result.width);
            var imageHeight = Math.round(result.height);

            var originImageData = this._context2d.getImageData(0, 0, result.width, result.height);

            var i = 0;

            var redChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                redChannelData.data[i] = originImageData.data[i];
                redChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(redChannelData, 220, 0);

            var greenChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                greenChannelData.data[i + 1] = originImageData.data[i + 1];
                greenChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(greenChannelData, 440, 0);

            var blueChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                blueChannelData.data[i + 2] = originImageData.data[i + 2];
                blueChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(blueChannelData, 660, 0);

            var reversedChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                reversedChannelData.data[i] = 255 - originImageData.data[i];
                reversedChannelData.data[i + 1] = 255 - originImageData.data[i + 1];
                reversedChannelData.data[i + 2] = 255 - originImageData.data[i + 2];
                reversedChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(reversedChannelData, 0, 220);

            var blackAndWhiteChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                var color = (originImageData.data[i] + originImageData.data[i + 1] + originImageData.data[i + 2]) / 3
                blackAndWhiteChannelData.data[i] = color;
                blackAndWhiteChannelData.data[i + 1] = color;
                blackAndWhiteChannelData.data[i + 2] = color;
                blackAndWhiteChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(blackAndWhiteChannelData, 220, 220);
        }.bind(this)).catch(function (error) {
            console.log(error);
        });

    }

    new Main();

})();