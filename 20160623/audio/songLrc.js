/**
 * Created by Hiro on 16/6/22.
 */

window.Hiro = window.Hiro || {};

(function () {

    function getSongLrc() {
        
        $.get("Heartbeats.lrc").done(function (data) {
            this._songLrc=data;
        }).fail(function () {
            console.error("加载失败");
        }).bind(this);
        
    }
    
    
})();