/**
 * Created by Hiro on 16/7/23.
 */

const fs = requires("fs");

class Main {

    constructor() {
        fs.readdir("/", function () {
            console.log(arguments);
        });
    }
}

new Main();