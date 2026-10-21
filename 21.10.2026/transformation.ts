window.addEventListener("load", hndLoad);
let crc2: CanvasRenderingContext2D;
let CorSystem: Path2D = new Path2D();

function hndLoad(_event: Event): void {
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    crc2 = canvas.getContext("2d")!;

    drawCoordinateSystem();
    transformCoordinateSystem();
}

function drawCoordinateSystem(): void {
    // draw x axis
    CorSystem.moveTo(0,0);
    CorSystem.lineTo(0,200);
    // draw y axis
    CorSystem.moveTo(0,0);
    CorSystem.lineTo(200,0);

    // draw all notches on x axis
    let xCor:number = 0
    for (let i:number = 0; i < 21; i++) {
        CorSystem.moveTo(xCor,0);
        CorSystem.lineTo(xCor, 3);
        xCor += 10
    }
    
    // draw all notches on y axis
    let yCor:number = 0
    for (let i:number = 0; i < 21; i++) {
        CorSystem.moveTo(0,yCor);
        CorSystem.lineTo(3, yCor);
        yCor += 10
    }
    crc2.strokeStyle = "#eacb4f"
    crc2.stroke(CorSystem);
}

function transformCoordinateSystem(): void {
    crc2.translate(200,0);
    crc2.rotate(90*Math.PI/180);
    crc2.translate(0,-200);
    crc2.strokeStyle = "#7fe04e"
    crc2.stroke(CorSystem);

    crc2.translate(0,-400);
    crc2.rotate(90*Math.PI/180);
    crc2.translate(400,-400);
    crc2.strokeStyle = "#d74a4a"
    crc2.stroke(CorSystem);

    crc2.translate(0,-400);
    crc2.rotate(90*Math.PI/180);
    crc2.translate(400,-400);
    crc2.strokeStyle = "#736bdd"
    crc2.stroke(CorSystem);
}