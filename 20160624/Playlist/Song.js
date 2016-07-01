/**
 * Created by Hiro on 16/6/28.
 */

window.Hiro = window.Hiro || {};

(function () {

    function Song(file) {
        this._file = file;
        this._li = document.createElement("li");
        this._a = document.createElement("a");
        this._a.href = "#";
        this._a.innerHTML = file.name;

        this._li.appendChild(this._a);

        this.addListeners();
    }

    Song.prototype.addListeners = function () {
        this._a.onclick = function () {
            if (this.onselect) {
                this.onselect(this._file);
            }
        }.bind(this);
    };

    Object.defineProperty(Song.prototype, "node", {
        get: function () {
            return this._li;
        }
    });

    Object.defineProperty(Song.prototype, "oselect", {
        get: function () {
            return this._onselect;
        },
        set: function (value) {
            this._onselect = value;
        }
    });

    Song.prototype.isEqual = function (song) {
        return this._file.name == song._file.name;
    };
    
    Hiro.Song = Song;

})();