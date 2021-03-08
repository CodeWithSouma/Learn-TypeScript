// sol1: inline annotation
let drawPoint = (point : {x: number, y: number}) => {
    //...
}

drawPoint({
    x: 1,
    y: 2

});

interface Point{
    x: number, 
    y: number
}

// sol1: using interface
let drawPoint2 = (point : Point) => {
    //...
}