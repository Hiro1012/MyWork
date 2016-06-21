/**
 * Created by Hiro on 16/6/21.
 */


(function () {

    function Main() {
        this._div1 = document.getElementById("div1");
        this._div1.useCustomContextMenu = true;

        var menu = new Hiro.CustomContextMenu();
        menu.addItem(new Hiro.CustomContextMenuItem("Google", function () {
            window.location.href = "http://google.com";
        }));
        menu.addItem(new Hiro.CustomContextMenuItem("Why not Baidu?", function () {
            console.log("Don't be evil");
        }));
        this._div1.customContextMenu = menu;


    }


    new Main();
})();