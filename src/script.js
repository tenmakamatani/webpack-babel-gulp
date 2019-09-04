"use strict";

import $ from "jquery";
import countUp from "./function.js";

let cnt = 0;

$("button").click(() => {
    $("ul").append("<li>" + String(cnt) + "</li>");
    cnt = countUp(cnt);
});