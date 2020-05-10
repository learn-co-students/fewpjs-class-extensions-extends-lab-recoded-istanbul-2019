class Polygon {
    constructor(array) {
        this.sides = array;
    }
    get countSides() {
        return this.sides.length;
    }
    get perimeter() {
        return this.sides.reduce((acc, side) => acc + side)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.sides[0] + this.sides[1] > this.sides[2] && this.sides[1] + this.sides[2] > this.sides[0] && this.sides[0] + this.sides[2] > this.sides[1]) {
            return true;
        } else {
            return false;
        }
    }
}
class Square extends Polygon {
    get isValid() {
        if (this.sides.every((side, index, ) => side === this.sides[0])) {
            return true;
        } else {
            return false;
        }
    }
    get area() {
        return this.sides[0] ** 2
    }
}