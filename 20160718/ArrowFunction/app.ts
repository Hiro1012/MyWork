/**
 * Created by Hiro on 16/7/22.
 */

"use strict";

class Main {

    index = 0;

    constructor() {

    }

    startTimer() {
        setInterval(()=> {
            console.log(this.index++);
        }, 1000);

        // setInterval(function () {
        //     console.log(this);
        //     console.log(this.index++);
        // }, 1000);
    }
}

var m = new Main();
m.startTimer();