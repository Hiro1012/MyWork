/**
 * Created by Hiro on 16/7/18.
 */

namespace cn.hiro {

    import Hello = cn.hiro.hello.Hello;

    export class Main {
        constructor() {
            // var h = new cn.hiro.hello.Hello();
            var h:Hello = new Hello();
            h.sayHello();
        }
    }
}

new cn.hiro.Main();