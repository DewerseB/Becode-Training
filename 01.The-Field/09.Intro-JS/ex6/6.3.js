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

function random(x) {
    return Math.round(Math.random()*x);
}

/**
 * Creates random rectangles and test if they collide with each others.
 * 
 * @param {integer} n number of rectangles created
 * 
 * @return {array} an array containing colliding rectangles
 */
function collidingRandRect(n) {
    let rectArray = [];
    let rectColliding = [];
    for (let i = 0; i < n; i++) {
        rectArray[i] = new Rectangle(random(500), random(500), random(10), random(10));
        for (let j = 0; j < i; j++) {
            if ( rectArray[i].collides(rectArray[j]) ) {
                rectColliding.includes(rectArray[i]) || rectColliding.push(rectArray[i]);
                rectColliding.includes(rectArray[j]) || rectColliding.push(rectArray[j]);
            } 
        }
    }
    return rectColliding;
}

let rectColliding = collidingRandRect(1000)
console.log(rectColliding);
console.log("Total = " + rectColliding.length);