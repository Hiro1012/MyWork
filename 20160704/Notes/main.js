/**
 * Created by Hiro on 16/7/8.
 */

(function () {

    window.Config = {DB_NAME: "Notes", DB_VERSION: 1};

    function Main() {
        this.getElements();
        this.addListeners();

        this.connectDB(function () {
            this.readData();
        }.bind(this));
    }

    var p = Main.prototype;

    p.getElements = function () {
        this._form = document.getElementById("form");
        this._dataContainer = document.getElementById("datacontainer");
        this._msgContainer = document.getElementById("msgcontainer");
    };

    p.addListeners = function () {
        this._form.onsubmit = function (event) {
            event.preventDefault();

            var name = this._form['name'];
            var date = this._form['date'];
            var amount = this._form['amount'];
            var take = this._form['take'];

            this.saveData({name: name.value, date: date.value, amount: amount.value, take: take.value});
        }.bind(this);
    };

    p.clearFormFields = function () {
        this._form['name'].value = "";
        this._form['amount'].value = "";
        this._form['take'].value = "";
    };

    p.saveData = function (data) {
        var trans = this._db.transaction("notes", "readwrite");
        var os = trans.objectStore("notes");
        var req = os.put(data);
        req.onsuccess = function () {
            this._msgContainer.innerHTML = "保存数据成功";
            this.clearFormFields();

            this.readData();
        }.bind(this);
        req.onerror = function () {
            this._msgContainer.innerHTML = "保存数据失败";
        }.bind(this);
    };

    p.readData = function () {
        var trans = this._db.transaction("notes");
        var os = trans.objectStore("notes");
        var req = os.getAll();
        req.onerror = function () {
            this._msgContainer.innerHTML = "读取数据失败";
        }.bind(this);
        req.onsuccess = function (event) {
            var data = event.target.result;
            this.showData(data);
        }.bind(this);
    };

    p.showData = function (data) {
        if (this._table) {
            this._table.parentNode.removeChild(this._table);
        }

        this._table = document.createElement("table");
        var _tr = document.createElement("tr");
        this._table.appendChild(_tr);
        _tr.appendChild(this.createElementAndContent("td", "项目"));
        _tr.appendChild(this.createElementAndContent("td", "日期"));
        _tr.appendChild(this.createElementAndContent("td", "数额"));
        _tr.appendChild(this.createElementAndContent("td", "收支"));

        for (var i = 0; i < data.length; i++) {
            var tr = new Hiro.TableRow(data[i]);
            tr.onRequestDeleteRow = this.requestDeleteRowHandler.bind(this);
            this._table.appendChild(tr.node);
        }

        this._dataContainer.appendChild(this._table);
    };

    p.requestDeleteRowHandler = function (dbObject) {
        var trans = this._db.transaction("notes", "readwrite");
        var os = trans.objectStore("notes");
        var req = os.delete(dbObject.id);
        req.onsuccess = function () {
            this._msgContainer.innerHTML = "删除数据成功";

            this.readData();
        }.bind(this);
        req.onerror = function () {
            this._msgContainer.innerHTML = "删除数据失败";
        }.bind(this);
    };

    p.createElementAndContent = function (tagName, content) {
        var tag = document.createElement(tagName);
        tag.innerHTML = content;
        return tag;
    };

    p.connectDB = function (sucCallback) {
        var req = indexedDB.open(Config.DB_NAME, Config.DB_VERSION);
        req.onsuccess = function (event) {
            this._db = req.result;

            sucCallback();
        }.bind(this);
        req.onerror = function (event) {
            console.error(event);
        };
        req.onupgradeneeded = function (event) {
            var db = req.result;

            var os = db.createObjectStore("notes", {keyPath: "id", autoIncrement: true});
            os.createIndex("name", "name");
            os.createIndex("date", "date");
            os.createIndex("amount", "amount");
            os.createIndex("take", "take");
        };
    };

    new Main();
})();