"use strict";
window.addEventListener("load", handleLoad);
let crc2;
function handleLoad() {
    const canvas = document.querySelector("canvas");
    crc2 = canvas.getContext("2d");
    let newPlanet = new Path2D();
    crc2.moveTo(400, 400);
    newPlanet.arc(400, 400, 200, 0, 2 * Math.PI);
    crc2.stroke(newPlanet);
    newPlanet.closePath();
}
//# sourceMappingURL=Testing.js.map