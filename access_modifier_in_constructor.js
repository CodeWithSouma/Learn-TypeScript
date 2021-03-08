var Point = /** @class */ (function () {
    // access modifier in  constructor parameter 
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
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error("Value can't be less than zero");
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (value) {
        if (value < 0)
            throw new Error("Value can't be less than zero");
        this.y = value;
    };
    return Point;
}());
var point = new Point(1, 2);
point.X = 10;
point.setY(20);
point.draw();
