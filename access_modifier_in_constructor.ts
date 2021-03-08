class Point {

    // access modifier in  constructor parameter 
    constructor(private x?: number, private y?: number) {

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

