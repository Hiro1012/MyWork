/**
 * Created by Hiro on 16/7/25.
 */

var gulp = require("gulp");

gulp.task("task1", function () {
    console.log("Task1");
});

gulp.task("default", ["task1"], function () {
    console.log("Hello Gulp");
});