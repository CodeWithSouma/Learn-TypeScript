var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("Drawing...");
        console.log('X: ' + this.x + ', y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point(1, 2);
point.draw();
var point2 = new Point();
point2.draw();
