"use strict";

const gulp = require("gulp");
const webpack = require("webpack")
const webpackStream = require("webpack-stream");
const webpackConfig = require("./webpack.config");

gulp.task("bundle", () => {
    return webpackStream(webpackConfig, webpack).pipe(gulp.dest("./dist"));
});

gulp.task("watch", gulp.series("bundle", () => {
    gulp.watch("./src/script.js", gulp.task("bundle"));
}));

gulp.task("default", gulp.series("watch"));