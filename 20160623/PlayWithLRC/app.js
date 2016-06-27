/**
 * Created by Hiro on 16/6/22.
 */


(function () {

    function App() {

        /**
         *
         * @type {HTMLMediaElement}
         * @private
         */
        this._audio = document.getElementById("audio");
        this._lrcContainer = document.getElementById("lrc-container");
        
        this.loadLrc();

        setInterval(function () {
            if (this._lrc) {
                var content = this._lrc.getContent(Math.round(this._audio.currentTime));
                if (content) {
                    this._lrcContainer.innerHTML = content;
                }
            }
        }.bind(this), 1000);

    }

    App.prototype.loadLrc = function () {
        $.get("Heartbeats.lrc").done(function (data) {
            this._lrc = new Hiro.Lrc(data);
        }.bind(this));
    };

    new App();

})();