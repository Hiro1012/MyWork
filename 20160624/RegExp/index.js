/**
 * Created by Hiro on 16/6/27.
 */


(function () {

    // var str = "Hello World";
    // console.log(str.replace(/o/g, "a"));
    //
    // var email = "linjh1012@gmai.com";
    // var p = /.*@.*\..*/;
    // console.log(p.test(email));

    var str = "Hello World Google Apple name class";
    var p = /\b(\S{5})\b/g;
    while (true) {
        var result = p.exec(str);
        if (result) {
            console.log(result);
        } else {
            break;
        }
    }

})();