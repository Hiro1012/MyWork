/**
 * Created by Hiro on 16/6/22.
 */

window.Hiro = window.Hiro || {};

(function () {

    function Main() {

        this._audio = document.getElementById("audio");

        var Lrc = new Hiro.getSongLrc();

    }


    new Main();

})();