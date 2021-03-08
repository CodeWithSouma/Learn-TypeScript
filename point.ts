export class Point {

    // access modifier in  constructor parameter 
    constructor(private _x?: number, private _y?: number) {

    }

    draw() {
        console.log("Drawing...");
        console.log('X: ' + this._x + ', y: ' + this._y);
    }

    getDistance(another: Point) {

    }

    // properties
    get x(){
        return this._x;
    }

    // getter 
    getY(){
        return this._y;
    }

    //properties
    set x(value: number) {
        if (value < 0) 
            throw new Error("Value can't be less than zero");
        this._x = value;
    }

    // setter
    setY(value: number) {
        if (value < 0) 
            throw new Error("Value can't be less than zero");
        this._y = value;
    }
}