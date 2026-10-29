namespace SolarSystem {

    export class CelestialBody extends Body {
        orbit: number;
        orbitCenter: Vector;
        angle: number;        
        orbitingBodies?: CelestialBody;
        parent?: CelestialBody;

        constructor (_name:string, _position:Vector, _size:number, _velocity:number, _color:string, _orbit:number, _orbitCenter:Vector,_angle:number, _orbitingBodies?:CelestialBody, _parent?:CelestialBody,) {
            super(_name, _position, _size, _velocity, _color);

            this.orbit = _orbit;
            this.orbitCenter = _orbitCenter
            this.angle = _angle;            
            this.orbitingBodies = _orbitingBodies;
            this.parent = _parent;
        }

        move(_deltaTime:number): void {
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

        draw(_drawOrigin:Vector): void {
            crc2.moveTo(_drawOrigin.x, _drawOrigin.y);
            crc2.beginPath();
            crc2.arc(_drawOrigin.x, _drawOrigin.y,this.size, 0, 2*Math.PI);
            crc2.fillStyle = this.color
            crc2.fill();
            crc2.closePath();
        }
    }
}