class Point{
    x: number; 
    y: number; 
    
    draw(){
        console.log("Drawing...");
        console.log('X: '+this.x + ', y: '+this.y);
    }

    getDistance(another: Point){

    }
}


let point:Point = new Point();
point.x = 1;
point.y = 2;
point.draw();
