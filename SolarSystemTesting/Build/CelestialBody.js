"use strict";
var SolarSystem;
(function (SolarSystem) {
    class CelestialBody extends SolarSystem.Body {
        orbit;
        orbitCenter;
        angle;
        orbitingBodies;
        parent;
        constructor(_name, _position, _size, _velocity, _color, _orbit, _orbitCenter, _angle, _orbitingBodies, _parent) {
            super(_name, _position, _size, _velocity, _color);
            this.orbit = _orbit;
            this.orbitCenter = _orbitCenter;
            this.angle = _angle;
            this.orbitingBodies = _orbitingBodies;
            this.parent = _parent;
        }
        move(_deltaTime) {
            if (this.parent) {
                this.angle += this.velocity * _deltaTime;
                this.position = this.parent.position.radial(this.orbit, this.parent.position, this.angle);
                this.draw(this.position);
            }
            else {
                this.angle += this.velocity * _deltaTime;
                this.position = this.orbitCenter.radial(this.orbit, this.orbitCenter, this.angle);
                this.draw(this.position);
            }
        }
        draw(_drawOrigin) {
            SolarSystem.crc2.moveTo(_drawOrigin.x, _drawOrigin.y);
            SolarSystem.crc2.beginPath();
            SolarSystem.crc2.arc(_drawOrigin.x, _drawOrigin.y, this.size, 0, 2 * Math.PI);
            SolarSystem.crc2.fillStyle = this.color;
            SolarSystem.crc2.fill();
            SolarSystem.crc2.closePath();
        }
    }
    SolarSystem.CelestialBody = CelestialBody;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=CelestialBody.js.map