/**
 * Created by Hiro on 16/7/18.
 */
var cn;
(function (cn) {
    var hiro;
    (function (hiro) {
        var hello;
        (function (hello) {
            var Hello = (function () {
                function Hello() {
                }
                Hello.prototype.sayHello = function () {
                    console.log("Hello TS");
                };
                Hello.prototype.getString = function () {
                    return "Hello World";
                };
                return Hello;
            }());
            hello.Hello = Hello;
        })(hello = hiro.hello || (hiro.hello = {}));
    })(hiro = cn.hiro || (cn.hiro = {}));
})(cn || (cn = {}));
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
