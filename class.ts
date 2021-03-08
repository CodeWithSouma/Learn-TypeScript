class Point {
    private x: number; // we can't access this form outside of the class
    private y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("Drawing...");
        console.log('X: ' + this.x + ', y: ' + this.y);
    }

    getDistance(another: Point) {

    }
}


let point: Point = new Point(1, 2);
point.draw();

let point2: Point = new Point();
point2.draw();
