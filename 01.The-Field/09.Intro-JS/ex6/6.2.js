class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle) {
        if (this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.length &&
            this.topLeftXPos + this.length > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.width &&
            this.topLeftYPos + this.width > otherRectangle.topLeftYPos) {
                return true;
            } else {
                return false;
            }
    }
}

let rectangle1 = new Rectangle(5, 5, 20, 20);
let rectangle2 = new Rectangle(10, 10, 20, 20);
let rectangle3 = new Rectangle(30, 30, 20, 20);

console.log(rectangle1.collides(rectangle2));
console.log(rectangle1.collides(rectangle3));
