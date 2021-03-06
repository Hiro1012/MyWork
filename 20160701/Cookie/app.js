/**
 * Created by Hiro on 16/7/3.
 */


(function () {

    function Main() {
        this._cookieKvs = {};

        this._btnAddData = document.getElementById("btnsavekv");
        this._keyInput = document.getElementById("keyinput");
        this._valueInput = document.getElementById("valueinput");
        this._output = document.getElementById("output");

        console.log(document.cookie);
        this.readCookieData();
        this.addListeners();
    }

    Main.prototype.addListeners = function () {
        this._btnAddData.onclick = function () {

            this._cookieKvs[this._keyInput.value] = this._valueInput.value;

            document.cookie = this._keyInput.value + "=" + this._valueInput.value;
        }.bind(this);
    };

    Main.prototype.readCookieData = function () {
        var str = document.cookie;

        if (str && str.length != 0) {
            var kvs = str.split(";");
            for (var i = 0; i < kvs.length; i++) {
                var kv = kvs[i].split("=");
                this._cookieKvs[kv[0]] = kv[1];
            }
        }

        var outputHtml = "";
        for (var k in this._cookieKvs) {
            outputHtml += k + ":" + this._cookieKvs[k] + "<br>";
        }
        this._output.innerHTML = outputHtml;
    };

    new Main();
})();