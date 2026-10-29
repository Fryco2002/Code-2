namespace SolarSystem {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    export let allCelestialBodies = Array();
    export let allOrbitsToDraw = Array();

    //for the loop:
    let lastTime: number = 0;

    //control time:
    let timeSpeed: number = 1;

    function handleLoad(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;
        createCelestialBodies();

        requestAnimationFrame(gameLoop);
    }

    function gameLoop(_currentTime:number): void {
        let deltaTime: number = (_currentTime - lastTime) / 1000 * timeSpeed;
        lastTime = _currentTime;

        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2.clearRect(0, 0, canvas.width, canvas.height);

        drawOrbit();
        //move all celestialbodies every frame
        for (let i:number = 0; i < allCelestialBodies.length; i++) {
            allCelestialBodies[i].move(deltaTime);
        }
        requestAnimationFrame(gameLoop);
    }

    function createCelestialBodies(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        const sunPoition: Vector = new Vector(canvas.width / 2, canvas.height /2);
        const newVec: Vector = new Vector(0,0);

        //Planets
        let mercury = new CelestialBody("Mercury", newVec, 10, 0.2*1.6, "#a7a7a7", 50, sunPoition,0.1 * Math.PI);
        let venus = new CelestialBody("Venus", newVec, 10, 0.2*1.18, "#face20", 100, sunPoition,0.1 * Math.PI);
        let earth = new CelestialBody("Earth", newVec, 10, 0.2, "#3e65ff", 200, sunPoition,0.1 * Math.PI);
        let mars = new CelestialBody("Mars", newVec, 10, 0.2*0.81, "#bd563c", 250, sunPoition,0.1 * Math.PI);
        let jupiter = new CelestialBody("Jupiter", newVec, 10, 0.2*0.44, "#ff9100", 400, sunPoition,0.1 * Math.PI);
        let saturn = new CelestialBody("Saturn", newVec, 10, 0.2*0.32, "#ffcd8f", 500, sunPoition,0.1 * Math.PI);
        let uranus = new CelestialBody("Uranus", newVec, 10, 0.2*0.23, "#26ff88", 700, sunPoition,0.1 * Math.PI);
        let neptune = new CelestialBody("Neptune", newVec, 10, 0.2*0.18, "#c380ff", 900, sunPoition,0.1 * Math.PI);
        //Moons
        let moon_earth = new CelestialBody("Moon", newVec, 5, 0.2*2, "#ffffff", 25, earth.position, 0.1 * Math.PI, earth ,earth);
        let moon_mars_01 = new CelestialBody("Phobos", newVec, 5, 0.2*2, "#ffffff", 25, mars.position, 0.1 * Math.PI, mars ,mars);
        let moon_mars_02 = new CelestialBody("Deimos", newVec, 5, 0.2*1.2, "#ffffff", 40, mars.position, 0.1 * Math.PI, mars ,mars);
        let moon_jupiter_01 = new CelestialBody("Ganymede", newVec, 5, 0.2*2.5, "#ffffff", 25, jupiter.position, 0.1 * Math.PI, jupiter ,jupiter);
        let moon_jupiter_02 = new CelestialBody("Callisto", newVec, 5, 0.2*1.8, "#ffffff", 40, jupiter.position, 0.1 * Math.PI, jupiter ,jupiter);
        let moon_jupiter_03 = new CelestialBody("Io", newVec, 5, 0.2*1.1, "#ffffff", 55, jupiter.position, 0.1 * Math.PI, jupiter ,jupiter);
        let moon_saturn_01 = new CelestialBody("Titan", newVec, 5, 0.2*2.1, "#ffffff", 25, saturn.position, 0.1 * Math.PI, saturn ,saturn);
        let moon_saturn_02 = new CelestialBody("Rhea", newVec, 5, 0.2*2, "#ffffff", 40, saturn.position, 0.1 * Math.PI, saturn ,saturn);
        let moon_saturn_03 = new CelestialBody("Iapetus", newVec, 5, 0.2*1.25, "#ffffff", 55, saturn.position, 0.1 * Math.PI, saturn ,saturn);
        let moon_uranus_01 = new CelestialBody("Titania", newVec, 5, 0.2*1.3, "#ffffff", 25, uranus.position, 0.1 * Math.PI, uranus ,uranus);
        let moon_uranus_02 = new CelestialBody("Oberon", newVec, 5, 0.2*2.2, "#ffffff", 40, uranus.position, 0.1 * Math.PI, uranus ,uranus);
        let moon_uranus_03 = new CelestialBody("Umbriel", newVec, 5, 0.2*1.55, "#ffffff", 55, uranus.position, 0.1 * Math.PI, uranus ,uranus);
        let moon_neptune_01 = new CelestialBody("Triton", newVec, 5, 0.2*1.65, "#ffffff", 25, neptune.position, 0.1 * Math.PI, neptune ,neptune);
        let moon_neptune_02 = new CelestialBody("Proteus", newVec, 5, 0.2*2, "#ffffff", 40, neptune.position, 0.1 * Math.PI, neptune ,neptune);
        let moon_neptune_03 = new CelestialBody("Nereid", newVec, 5, 0.2*2.3, "#ffffff", 55, neptune.position, 0.1 * Math.PI, neptune ,neptune);

        allCelestialBodies.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune,
            moon_earth, moon_mars_01, moon_mars_02, moon_jupiter_01, moon_jupiter_02, moon_jupiter_03,
            moon_saturn_01, moon_saturn_02, moon_saturn_03, moon_uranus_01, moon_uranus_02, moon_uranus_03,
            moon_neptune_01, moon_neptune_02, moon_neptune_03);
        console.log(allCelestialBodies);
        allOrbitsToDraw.push(mercury, venus, earth, mars, jupiter, saturn, uranus, neptune);
    }

    function drawOrbit(): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        canvas.style.backgroundColor = "#000000";
        // draw sun
        crc2.beginPath();
        crc2.arc(canvas.width / 2, canvas.height / 2, 15, 0, 2 * Math.PI)
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.closePath();

        for (let i:number = 0; i < allOrbitsToDraw.length; i++) {
            crc2.beginPath();
            crc2.arc(canvas.width / 2, canvas.height / 2, allOrbitsToDraw[i].orbit, 0, 2 * Math.PI);
            crc2.strokeStyle= allOrbitsToDraw[i].color;
            crc2.stroke();
            crc2.closePath();
        }
    }
}