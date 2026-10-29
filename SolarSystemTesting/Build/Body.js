"use strict";
var SolarSystem;
(function (SolarSystem) {
    class Body {
        name;
        position;
        size;
        velocity;
        color;
        constructor(_name, _position, _size, _velocity, _color) {
            this.name = _name;
            this.position = _position;
            this.size = _size;
            this.velocity = _velocity;
            this.color = _color;
        }
    }
    SolarSystem.Body = Body;
})(SolarSystem || (SolarSystem = {}));
//# sourceMappingURL=Body.js.map