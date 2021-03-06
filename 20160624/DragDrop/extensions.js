/**
 * Created by Hiro on 16/6/24.
 */

(function () {

    Object.defineProperty(HTMLDivElement.prototype, "acceptDrop", {
        get: function () {
            return this._acceptDrop;
        },
        set: function (value) {
            this._acceptDrop = value;

            if (this._acceptDrop) {
                this.ondragover = function (e) {
                    e.preventDefault();
                };
                this.ondrop = function (e) {
                    var id = e.dataTransfer.getData("domId");
                    var node = document.getElementById(id);
                    node.parentNode.removeChild(node);
                    this.appendChild(node);
                }
            } else {
                this.ondragover = null;
                this.ondrop = null;
            }
        }
    });

})();