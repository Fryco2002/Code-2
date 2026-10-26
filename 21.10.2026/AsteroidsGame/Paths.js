"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    L09_Asteroids.shapesAsteroids = [];
    function createPaths() {
        L09_Asteroids.asteroidPaths = createAsteroidsPaths(L09_Asteroids.shapesAsteroids);
        L09_Asteroids.ufoPath = createUfoPath();
    }
    L09_Asteroids.createPaths = createPaths;
    function createAsteroidsPaths(_shapes) {
        let paths = [];
        for (let type of _shapes) {
            let path = new Path2D();
            let first = true;
            //console.group(type);
            for (let coordinates of type) {
                //console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            //console.groupEnd();
            path.closePath;
            paths.push(path);
        }
        return paths;
    }
    function createUfoPath() {
    }
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Paths.js.map