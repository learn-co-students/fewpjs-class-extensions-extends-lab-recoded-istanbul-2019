// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    } 

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        let perimeter = 0;
        for (let i = 0; i < this.countSides; i++) {
            perimeter += this.sides[i];           
        }
        return perimeter;
    }
}

class Triangle extends Polygon {
    get isValid() {
        let numberOfSides = this.countSides;
        let sides = this.sides;

        if (!numberOfSides === 3) return false;

        if(sides[0]+sides[1] <= sides[2] || sides[0]+sides[2] <= sides[1] || sides[2]+sides[1] <= sides[0]) { return false; }
        return true;
    }
}

class Square extends Polygon {
    get isValid() {
        let sides = this.sides;

        for (let i = 0; i < sides.length - 1; i++) {
            if(sides[i] != sides[i+1])
            return false;
        }
        return true;
    }

    get area() {
        return Math.pow(this.sides[0], 2);
    }
}