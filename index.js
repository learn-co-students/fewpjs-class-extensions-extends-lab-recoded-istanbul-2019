// Your code here

class Polygon{
    constructor(sidesArr) {
        this.sides = sidesArr;
    };

    get countSides() {
       return this.sides.length;
    };

    get perimeter() {
        return this.sides.reduce((acc, curVal) => acc + curVal, 0);
    };
};

class Triangle extends Polygon {
    get isValid() {
        let sideA = this.sides[0];
        let sideB = this.sides[1];
        let sideC = this.sides[2];

        if (
            sideA + sideB > sideC &&
            sideA + sideC > sideB &&
            sideB + sideC > sideA
        ) {
            return true;
        };
        return false;
    };
};

class Square extends Polygon {
    get isValid() {
        if (this.sides.every(element => element === this.sides[0])) {
            return true;
        } else {
            return false;
        };
    };


    get area() {
        return this.sides[0]**2;
    };
};

