// Your code here
class Polygon {
    constructor (arr) {
        this.sides = arr
    }
    get countSides() {
        return this.sides.length
    }
    get perimeter() {
       return this.sides.reduce((acc, curr) =>  acc + curr)
    }
}

class Triangle extends Polygon {
    get isValid() {
        const side = this.sides;
        if (side[0] + side[1] > side[2] && side[1] + side[2] > side[0] && side[0] + side[2] > side[1]) {
            return true;
        } else {
            return false;
        }
    }
}


class Square extends Polygon {
    get isValid() {
        if (this.sides.every(el => el === this.sides[1])) {
            return true
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[1] ** 2
    }
}