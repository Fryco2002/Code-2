namespace L09_Asteroids {
    export let asteroidPaths: Path2D[];
    export let ufoPath: Path2D;

    export let shapesAsteroids: number[][][] = 
    [

    ]



    export function createPaths(): void {
        asteroidPaths = createAsteroidsPaths(shapesAsteroids);
        ufoPath = createUfoPath();
    }

    function createAsteroidsPaths(_shapes: number[][][]): Path2D[] {
        let paths: Path2D[] = [];
        for (let type of _shapes) {
            let path: Path2D = new Path2D();
            let first: boolean = true;
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

    function createUfoPath():void {


    }
}