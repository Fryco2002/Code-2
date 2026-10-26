"use strict";
var classtesting;
(function (classtesting) {
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
    }
    let v1 = new Vector(3, 3);
    v1.scale(2);
    console.log(v1);
})(classtesting || (classtesting = {}));
//# sourceMappingURL=ClassTesting.js.map