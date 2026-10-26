namespace L09_Asteroids {
    window.addEventListener("load", handleload);

    export let crc2 = CanvasRenderingContext2D;

    function handleload(_event: Event):void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        crc2.fillstyle = "black";
        crc2.strokestyle = "white";

        createPaths();
        console.log("Asteroids paths: ", asteroidPaths);

        let asteroid: Asteroid = new Asteroid(1);
    }
}

//video implemantation 19:35