/**
 * Created by Hiro on 16/6/21.
 */

window.Hiro = window.Hiro || {};

(function () {

    function CustomContextMenu() {
        this._node = document.createElement("div");
        this._node.style.position = "fixed";
        this._node.style.backgroundColor = "#dddddd";

        this._ul = document.createElement("ul");
        this._node.appendChild(this._ul);
    }

    Object.defineProperty(CustomContextMenu.prototype, "node", {
        get: function () {
            return this._node;
        }
    });

    CustomContextMenu.prototype.addItem = function (item) {
        this._ul.appendChild(item.node);
    };

    CustomContextMenu.prototype.showMenu=function (x,y) {
        CustomContextMenu.hideCurrentMenu();

        CustomContextMenu._currentMenu=this;
        this._node.style.display="block";
        this._node.style.left=x+"px";
        this._node.style.top=y+"px";

        document.onmouseup=function(event){
            if (event.button== 0){
                this.hide();
            }
        }.bind(this);
    };

    CustomContextMenu.prototype.hide=function () {
        this._node.style.display="none";
    };

    CustomContextMenu.hideCurrentMenu=function () {
        if(CustomContextMenu._currentMenu){
            CustomContextMenu._currentMenu.hide();
        }
    };

    document.oncontextmenu=function (event) {
        CustomContextMenu.hideCurrentMenu();
    };

    Hiro.CustomContextMenu = CustomContextMenu;
})();