"use strict";
window.addEventListener("load", hndLoad);
let crc2;
function hndLoad(_event) {
    const canvas = document.querySelector("canvas");
    crc2 = canvas.getContext("2d");
    crc2.globalAlpha = 0.5;
    crc2.fillStyle = "#de8a8a";
    crc2.beginPath();
    for (let i = 0; i < 10; i++) {
        drawTriangle(Math.random() * 1920, Math.random() * 1080, Math.random() * 1920, Math.random() * 1080, Math.random() * 1920, Math.random() * 1080);
        randomStroke(2);
        crc2.closePath();
        crc2.stroke();
    }
    crc2.closePath();
    crc2.beginPath();
    for (let i = 0; i < 3; i++) {
        drawLine(960, 540, 20);
        randomStroke(3);
        crc2.closePath();
        crc2.stroke();
    }
    crc2.closePath();
    crc2.beginPath();
    for (let i = 0; i < 50; i++) {
        drawCircle(100);
        randomStroke(4);
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
    crc2.closePath();
}
function drawCircle(_radius) {
    let randomX = Math.random() * 1920;
    let randomY = Math.random() * 1080;
    crc2.moveTo(randomX + _radius, randomY);
    crc2.arc(randomX, randomY, _radius, 0, 2 * Math.PI);
}
function drawTriangle(_ax, _ay, _bx, _by, _cx, _cy) {
    crc2.moveTo(_ax, _ay);
    crc2.lineTo(_bx, _by);
    crc2.lineTo(_cx, _cy);
    crc2.lineTo(_ax, _ay);
}
function drawLine(_startx, _starty, _points) {
    crc2.moveTo(_startx, _starty);
    for (let i = 0; i < _points; i++) {
        crc2.lineTo(Math.random() * 1920, Math.random() * 1080);
    }
}
function randomStroke(_strokeColor) {
    crc2.lineWidth = Math.random() * 15;
    if (_strokeColor == 1) {
        crc2.strokeStyle = "#ff0000";
    }
    else if (_strokeColor == 2) {
        crc2.strokeStyle = "#00ff80";
    }
    else if (_strokeColor == 3) {
        crc2.strokeStyle = "#2200ff";
    }
    else if (_strokeColor == 4) {
        crc2.strokeStyle = "#ff00bf";
    }
    else if (_strokeColor == 5) {
        crc2.strokeStyle = "#ff8000";
    }
    else {
        crc2.strokeStyle = "#000000";
    }
}
//# sourceMappingURL=Canvas.js.map