"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Asteroid {
        position;
        velocity;
        type;
        size;
        constructor(_size) {
            console.log("Asteroid constructor");
            this.position = new L09_Asteroids.Vector(0, 0);
            this.velocity = new L09_Asteroids.Vector(0, 0);
            this.velocity.random(100, 200);
            this.type = Math.floor(Math.random() * 4);
            this.size = _size;
        }
        moveBy(_timeslice) {
            console.log("Asteroid move");
        }
        draw() {
            console.log("Asteroid draw");
        }
    }
    L09_Asteroids.Asteroid = Asteroid;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Asteroid.js.map