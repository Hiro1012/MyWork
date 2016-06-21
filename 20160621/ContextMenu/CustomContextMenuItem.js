/**
 * Created by Hiro on 16/6/22.
 */

window.Hiro = window.Hiro || {};

(function () {

    function CustomContextMenuItem(text, itemSelectCallback) {
        this._itemSelectedCallback = itemSelectCallback;

        this._li = document.createElement("li");

        this._a = document.createElement("a");
        this._li.appendChild(this._a);
        this._a.href = "#";
        this._a.innerHTML = text;
        this._a.onclick = function (event) {
            if (this._itemSelectedCallback) {
                this._itemSelectedCallback();
            }
        }.bind(this);
    }

    Object.defineProperty(CustomContextMenuItem.prototype, "node", {
        get: function () {
            return this._li;
        }
    });

    Hiro.CustomContextMenuItem = CustomContextMenuItem;
})();
