// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides.slice(0);
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce((sum, side) => sum + side);
    }
}

class Triangle extends Polygon {
    get isValid() {
        return this.sides.reduce((validity, side, index, arr) => validity && side < arr[(index + 1) % 3] + arr[(index + 2) % 3], true);
    }
}

class Square extends Polygon {
    get isValid() {
        return this.sides.reduce((validity, side, index, arr) => validity && side === arr[(index + 1) % 4], true);
    }

    get area() {
        return this.sides[0] ** 2;
    }
}