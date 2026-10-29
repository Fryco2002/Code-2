"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Vector {
        x = 0;
        y = 0;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        radial(_radius, _center, _angle) {
            let newX = _center.x + _radius * Math.cos(_angle);
            let newY = _center.y + _radius * Math.sin(_angle);
            return new Vector(newX, newY);
        }
        random(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    SolarSystem.Vector = Vector;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Vector.js.map