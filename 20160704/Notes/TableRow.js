/**
 * Created by Hiro on 16/7/8.
 */

window.Hiro = window.Hiro || {};

(function () {

    function TableRow(dbObject) {
        this._dbObject = dbObject;

        this._node = document.createElement("tr");
        this._node.appendChild(this._createTd(dbObject.name));
        this._node.appendChild(this._createTd(dbObject.date));
        this._node.appendChild(this._createTd(dbObject.amount));
        this._node.appendChild(this._createTd(dbObject.take != 0 ? "收入" : "支出"));

        var td = this._createTd();
        td.appendChild(this._createDeleteButton());
        this._node.appendChild(td);
    }

    var p = TableRow.prototype;

    p._createDeleteButton = function () {
        var btn = document.createElement("button");
        btn.innerHTML = "删除";
        btn.onclick = function () {
            if (this.onRequestDeleteRow) {
                this.onRequestDeleteRow(this._dbObject);
            }
        }.bind(this);
        return btn;
    };

    p._createTd = function (content) {
        content = content || "";

        var td = document.createElement("td");
        td.innerHTML = content;
        return td;
    };

    Object.defineProperty(p, "node", {
        get: function () {
            return this._node;
        }
    });

    Object.defineProperty(p, "onRequestDeleteRow", {
        get: function () {
            return this._onRequestDeleteRow;
        },
        set: function (value) {
            this._onRequestDeleteRow = value;
        }
    });

    Hiro.TableRow = TableRow;

})();