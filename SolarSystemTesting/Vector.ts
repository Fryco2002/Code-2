namespace SolarSystem {
    export class Vector {
        x: number = 0;
        y: number = 0;
        
        constructor (_x: number, _y: number) {
            this.set(_x, _y);
        }

        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        radial(_radius:number,_center:Vector, _angle:number): Vector {
            let newX = _center.x + _radius * Math.cos(_angle);
            let newY = _center.y + _radius * Math.sin(_angle);
            return new Vector(newX, newY);
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length); 
        }
    }
}