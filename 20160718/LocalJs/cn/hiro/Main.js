/**
 * Created by Hiro on 16/7/18.
 */
var cn;
(function (cn) {
    var hiro;
    (function (hiro) {
        var Hello = cn.hiro.hello.Hello;
        var Main = (function () {
            function Main() {
                // var h = new cn.hiro.hello.Hello();
                var h = new Hello();
                h.sayHello();
            }
            return Main;
        }());
        hiro.Main = Main;
    })(hiro = cn.hiro || (cn.hiro = {}));
})(cn || (cn = {}));
new cn.hiro.Main();
//# sourceMappingURL=Main.js.map