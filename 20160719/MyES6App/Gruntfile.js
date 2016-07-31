/**
 * Created by Hiro on 16/7/19.
 */

module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        shell: {
            compile: {
                command: "cd src&&java -jar ../tools/closure-compiler-v20160713.jar --js_output_file ../build/main.min.js --js cn/Hiro/Hello.js cn/Hiro/Hi.js App.js"
            }
        }
    });

    grunt.registerTask("default", ["shell:compile"]);
};