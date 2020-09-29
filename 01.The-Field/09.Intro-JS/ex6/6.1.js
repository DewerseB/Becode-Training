class Circle {
    constructor(xPos, yPos, radius) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos = this.xPos + xOffset;
        this.yPos = this.yPos + yOffset;
    }
    get surface() {
        return (Math.PI * Math.pow(this.radius, 2));
    }
}

let circle1 = new Circle(2, 2, 10);
console.log(circle1.xPos + " " + circle1.yPos + " " + circle1.radius);
circle1.move(1, 1);
console.log(circle1.xPos + " " + circle1.yPos + " " + circle1.radius);
console.log(circle1.surface);
