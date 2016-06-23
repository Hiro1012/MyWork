/**
 * Created by Hiro on 16/6/23.
 */


window.Hiro = window.Hiro || {};

(function () {

    function Main() {
        var eyes = document.getElementsByClassName("eye");
        for (var i = 0; i < eyes.length; i++) {
            eyes[i].appendChild(new Hiro.Eyeball().node);
        }
    }
    
    new Main();

})();